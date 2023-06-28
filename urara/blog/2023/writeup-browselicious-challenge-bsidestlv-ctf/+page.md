---
title: BSidesTLV CTF 2023 Browselicious (Misc) Writeup
tags:
  - ctf
  - writeups
  - bsidestlv-ctf-2023
categories:
  - CTF Writeups
summary: Writeup for Browselicious challenge (Misc) from BsidesTLV CTF 2023
created: 2023-06-28
lastmod: 2023-06-28
image: https://github.com/hash3liZer/khatta/assets/29171692/1788ec87-fc59-49a7-a035-ec767504fb3d
---

# Introducton
This writeup is for the **Browselicious** challenge from **Misc** category in BSidesTLV CTF held online. The challenge had an external link and a `js` file that contained browser extension code. The external link was a simple website that had a URL Input field. The URL was probably being processed in a browser on the backend with the extension installed.

To complete the challenge, one had to create a document with a `input[type="password"]` field and capture the value of this field when populated by the extension itself. But also, we needed to exploit a race condition here by doing a `postMessage` before the extension itself.

# Writeup
### Server Request
Right after i visited the page, it said _Our Extension is coming soon_ and there was an input field that accepted a URL. So, right away i fired up `ngrok` without actually running anything for the proxy and checked if i received anything back.

```bash
$ ngrok http 8000
```

And i got requests back on terminal.

<img width="946" alt="image" src="https://github.com/hash3liZer/khatta/assets/29171692/ba40787f-c811-46ec-93a5-1a67298d9a28">

### Code Review
Then i opened the `js` file and the code has 2 main events: `onMessage` and `onLoad`. The first event checks for a couple conditions and populates data in the `input[type="password"]` field. The second event simply fires a `postMessage` to the current window with some data. 

```javascript
// Listen for messages from the extension
window.addEventListener("message", function (event) {
    // Check if the message is from the extension
    if (event.source === window && event.data.action === "populatePassword") {
        // Find the password input field
        var passwordField = document.querySelector('input[type="password"]');

        // Populate the password field with the specified string
        if (passwordField) {
            passwordField.value = (event.data.url === "http://flag") ? "BSidevTLV2023{TheFlag}" : "MyDefaultPassword";
        }
    }
});

// Send a message to populate the password field on page load
window.addEventListener("load", function () {
    window.postMessage({
        action: "populatePassword",
        url: window.location.href,
        password: "YourPassword" // Replace with the desired password
    }, "*");
});
```

### Exploit
To exploit the challenge, we need to implement 3 things in the PoC:

* Create a web page with `input[type="password"]` form field which will accept the data.
* Exploit the Race condition by setting an interval in _milliseconds_.
* In the `postMessage`, set the value of `url` to `http://flag`.

First setup a `python` file to act as our server: 
```python
import http.server
import socketserver

PORT = 8000

html_content = r'''
PAYLOAD HERE
'''

# Request Handler
class MyHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(html_content.encode('utf-8'))

with socketserver.TCPServer(("0.0.0.0", PORT), MyHandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
```

