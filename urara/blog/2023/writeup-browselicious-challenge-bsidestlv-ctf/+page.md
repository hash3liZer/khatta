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

To complete the challenge, one had to create a document with a _password input_ field and capture the value of this field when 
