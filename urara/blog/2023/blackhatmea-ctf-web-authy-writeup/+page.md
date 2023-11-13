---
title: Blackhat MEA CTF Qualifiers - Web Authy and Warm Me Up Writeup
tags:
  - blackhatmea
  - ctf
  - authy
  - warmme-up
  - unicode
  - broken-logic
categories:
  - CTF
  - Writeups
summary: Writeups for 2 of web challenges from Blackhat MEA Qualifier CTF Round namely Authy and Warm Me Up  
created: 2023-11-13
lastmod: 2023-11-13
---

## Introduction
The 2 of the easy challenges from **BlackhatMEA CTF Qualifiers** which was held online were:

* Authy
* Warm Me Up

### Authy
![image](https://github.com/hash3liZer/khatta/assets/29171692/10ee8e70-1ea2-4742-b1c9-e9ad483cc1b8)

The source code was provided with the challenge. So, i downloaded the source code. The password for the archived file was `flagyard`. After extracting the files, i started reading the code to find any clues. At first, i started looking for any kind of `parameter pollution` or any logical vulnerability that could lead to login without `password authentication`. But eventually no success. Upon reading the source code more carefully, i discovered the difference between the length check at `LoginController` and `SignupController`. At the login controller we had the password stored something like this: 
```go
password := []rune(user.Password)
```

However, that was totally not the case with the signup functionality. The check was rather simple: 
```go
if len(user.Password) < 6 {
        log.Error("Password too short")
        resp := c.JSON(http.StatusConflict, helper.ErrorLog(http.StatusConflict, "Password too short", "EXT_REF"))
        return resp
}
```

So, eventually reading out on the functions i found out that with `rune` the unicode characters are ignored and not counted when you would run the `len` function on the variable. So, in short our vulnerable part of the code is: 
```go
password := []rune(user.Password)
result.Token = helper.JwtGenerator(result.Username, result.Firstname, result.Lastname, os.Getenv("SECRET"))
if len(password) < 6 {
        flag := os.Getenv("FLAG")
        res := &Flag{
                Flag: flag,
        }
        resp := c.JSON(http.StatusOK, res)
        log.Info()
        return resp
}
```

To exploit the code i simply signed with uncode characters in my password that eventually would turn out to be less than 6 characters with `rune` function. So, my payload was: `世界`. I crafted a quick program to verify it: 
![image](https://github.com/hash3liZer/khatta/assets/29171692/29759264-6548-4db9-8f0f-9906066e1ece)


Looks good, so signed up with the unicode password: 
```json
{
  "username": "hash3liZer",
  "password": "世界"
}
```

And then login:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"username": "hash3liZer", "password":"世界"}' http://targeturlhere/login
```

And got the **FLAG!**

### Warm Me Up

![image](https://github.com/hash3liZer/khatta/assets/29171692/f8eea34e-83fd-4ce1-ae17-723ba052ad4d)

With this one, there were no source files. There was just a plain login interface. The interface was: 

![image](https://github.com/hash3liZer/khatta/assets/29171692/10870615-7f93-43a6-9d70-0b1fad713811)

Intially, i went for some recon and enumeration. Looked for juicy information that i could find at common directories like `/robots.txt` or `.gitignore` but found nothing actually. So, time to move on. Now, looking at the login page, we have 3 parameters: 

* username[]
* password[]
* otp[]

At first i tried going with the default credentials or multiple parameters in the using `,` as a separator and again no luck. Now, looking at the response i found out the `session` token in cookies. It looked like a base64 string. So, i decoded it: 
```
echo 'base64string' | base64 -d
```

It turned out to an OTP code. At first it didn't make much sense to me. But much after discovering the `SQLi` in the credentials parameters, i discovered that this is actually connected with the login authentication. So, to login correctly we need this OTP code. The base64 decoded string turned out of be something like this: 
```
{"otp":"THECODEHERE"} M12SOME�8
```

Looking further, i found the SQLi injection in the `credentials` parameters. The application didn't throw any error but the `Login Failed` or server issues. So, it was a blind SQL. 

A quick payload with a single `'` triggered the error. I also verified a valid payload which gave the `200` response as expected: 
```sql
username=admin' OR 1=1 --&password=something&otp=2343
```

So, my final payload was: 
```sql
username=admin' UNION SELECT NULL, NULL --&password=password&otp=OTPHERE
```

With OTP from the one i found in the cookies. Upon send the post request, i got the **FLAG!**
