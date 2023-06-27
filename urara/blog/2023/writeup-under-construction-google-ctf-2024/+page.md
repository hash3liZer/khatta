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

The validation is based on the statement: `request.form.get('tier')`. This will always pick the first parameter if multiple parameters are to be supplied However, the application is passing the `raw_request` as it is to the next application which is in PHP. In order words
