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
So, at first i visited the URLS and got to know the application surface. 
