---
title: WPA(2) PMKID Hash Cracking (MIC) Process Explained
tags:
  - wireless
  - wpa-wpa2
  - wifi
categories:
  - Writeups
summary: A guide on what the MIC is and how the actual WPA(2) cracking happens at lower level  
created: 2024-08-25
lastmod: 2024-08-25
image: https://github.com/user-attachments/assets/51b06557-0a25-4ddd-a59d-6783add3a447
---

**After the discovery of the PMKID hash crack vulnerability, I spent some time understanding the process and WPA/WPA2 protocol & came across this idea to publish how the real hash cracking works. This article is all about how you can build up something like aircrack-ng or coWPAtty or in other words your own cracking tool. Since a lot of articles have been published on the 4-way handshake and how basic MIC cracking works, the aim here is to get to know how things work at the lower level.**

Well, in basic, there are three major keys that we have to compute: 

* Pairwise Master Keys (PMK)
* Pairwise Transient Keys (PTK)
* Message Integrity Code (MIC)

These three of them are computed in the same sequence as given. The idea behind the 4-way handshake is that two connecting stations have to prove that they know the key by not transmitting the actual key. Instead, the key is strongly encrypted and verified on Authenticator's (AP) Side. Various functions are used in this process to securely encrypt the passphrase key.

## The Handshake Process

Before the actual handshake takes place, i.e. EAPOL packets are transmitted, Open authentication and association steps are performed which in short verifies the compatibility of both interconnecting stations. In short, the following happens after successful association: 

* ANONCE, a randomly generated value is sent by Access Point to the connecting station.
* The Station then sends SNONCE along with Pairwise Transient Key (PTK) and MIC to AP. While PTK is derived from PMK.
* On receiving the second EAPOL, access point computes Group Transient Key (GTK).
* Lastly, AP sends an acknowledgement to the station which also contains a MIC code.

From the above process, our main objective is to get the MIC hash. You see, MIC is transmitted at second and fourth step. Tools like aircrack-ng and coWPAtty use the MIC at the fourth step to crack the hash. While here we will look for the second frame MIC.

Calculating the MIC of the 2nd EAPOL frame can also be more useful, like a half captured handshake can be used in the process. Half handshakes can be captured and further manipulated by hosting a rogue access point. Let's come back to where we were.

### (PML) Pairwise Master Key Computation

In sequence we have PMK on the first side. PMK is used to derive PTK and is never sent over the air. instead, the derived PTK is transmitted to AP. PMK is computed using the Password-Based Key Derivation Function 2 (PBKDF2) which uses the HMAC-SHA1 hash algorithm to encode data. In result, a 256-bit hash will be created to this function. Well, in general, we could logically write this up:

```python
_PMK_ = PBKDF2(SHA1, Pre-Shared-Key, SSID, 4096, 256)
```

Where Pre-Shared-Key (PSK) is the actual plaintext password and SSID is used here as a salt for hashing. In the classic sense of Python, we could write:

```python
#!/usr/bin/python
from pbkdf2 import PBKDF2

# Supposing Values Here.
ssid = "shellvoide"      
psk = "mypassword"

pmk = PBKDF2(psk, ssid, 4096).read(32)
```

Make sure you have pbkdf2 library in path. Install it using python-pip if you don't have it already. 

### (PTK) Pairwise Transient Key Computation

The next hash in sequence is PTK which is transmitted in 2nd EAPOL frame. The construction of PTK is pretty tricky but thanks to stackoverfow from where i found the code. The PTK is dependant on ANONCE, SNONCE, AP MAC, Station MAC and PMK which are first concatenated and must exist in hex form. In result, a 512 bit string will be constructed which is the combination of various other keys. These keys are:

* Key Confirmation Key (KCK): 128 bits.
* Key Encryption Key (KEK): 128 bits.
* Temporal Key (TK): 128 bits.
* MIC Tx: 64 bits.
* MIC Rx: 64 bits.

While searching on web, i came across two implemenations of the function "PRF512" which is another pseudo random function for computing PTK. This one worked perfectly: 

```python
def customPRF512(key,A,B):
    blen = 64
    i    = 0
    R    = ''
    while i<=((blen*8+159)/160):
        hmacsha1 = hmac.new(key,A+chr(0x00)+B+chr(i),hashlib.sha1)
        i+=1
        R = R+hmacsha1.digest()
    return R[:blen]
```

And now putting the pieces together: 

```python
from pbkdf2 import PBKDF2
import hmac, binascii, hmac, hashlib, sha

def customPRF512(key,A,B):
    blen = 64
    i    = 0
    R    = ''
    while i<=((blen*8+159)/160):
        hmacsha1 = hmac.new(key,A+chr(0x00)+B+chr(i),hashlib.sha1)
        i+=1
        R = R+hmacsha1.digest()
    return R[:blen]

ssid = "shellvoide"      
psk = "mypassword"
mac_ap = binascii.unhexlify("000ef4ded961")
mac_cl = binascii.unhexlify("9840bb444f49")
anonce = binascii.unhexlify("26c7a2cf7d9d0657980e9d077562f5ae3f17929a66e870569980dc5fc2fcf238")
cnonce = binascii.unhexlify("80ccbcbea79e39b4d88cf43478b19f32649cce78bc4942f4f51ba31207a9f2cf")

key_data = min(mac_ap, mac_cl) + max(mac_ap, mac_cl) + min(anonce,snonce) + max(anonce,snonce)
pke = "Pairwise key expansion"    # Standard Set Value

pmk = PBKDF2(psk, ssid, 4096).read(32)
ptk = customPRF512(pmk, PKE, key_data)
```

### (MIC) Message Integrity Code

Until now, we have two of our keys. MIC is a pain in the butt and it took me over a week to figure the right sequence. However, as I've already told that the MIC that we are going to compute is the MIC from the second EAPOL. From until to this point and all the previous proceedings, it's worth mentioning about this article which helped me a lot to reach this point. Remember that the PTK is the combination of various other keys and the first of them is KCK which will be used as a salt for MIC. 

```python
HMAC(KCK, payload, MD5/SHA128)
```

Where KCK, as you know, can be extracted from PTK and MD5/SHA1 are the hashes which are available through hashlib library. The only thing we are left with is payload. Here, the payload is referred to the whole data captured in the 2nd EAPOL frame. Well, doing it the Python way: 

```python
mic = hmac.new(ptk[0:16], payload, hashlib.md5).hexdigest() #WPA1
mic = hmac.new(ptk[0:16], payload, hashlib.sha1).hexdigest() #WPA2
```

Let's recall the whole script: 

```python
from pbkdf2 import PBKDF2
import hmac, binascii, hmac, hashlib, sha

def customPRF512(key,A,B):
    blen = 64
    i    = 0
    R    = ''
    while i<=((blen*8+159)/160):
        hmacsha1 = hmac.new(key,A+chr(0x00)+B+chr(i),hashlib.sha1)
        i+=1
        R = R+hmacsha1.digest()
    return R[:blen]

ssid = "shellvoide"      
psk = "mypassword"
mac_ap = binascii.unhexlify("000ef4ded961")
mac_cl = binascii.unhexlify("9840bb444f49")
anonce = binascii.unhexlify("26c7a2cf7d9d0657980e9d077562f5ae3f17929a66e870569980dc5fc2fcf238")
cnonce = binascii.unhexlify("80ccbcbea79e39b4d88cf43478b19f32649cce78bc4942f4f51ba31207a9f2cf")

# Supposing payload. You'll have to extract it.
payload = binascii.unhexlify("0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000")

key_data = min(mac_ap, mac_cl) + max(mac_ap, mac_cl) + min(anonce,snonce) + max(anonce,snonce)
pke = "Pairwise key expansion"    # Standard Set Value

pmk = PBKDF2(psk, ssid, 4096).read(32)
ptk = customPRF512(pmk, PKE, key_data)
mic = hmac.new(ptk[0:16], payload, hashlib.md5).hexdigest()

print "MIC: "+mic
```

If you give everything correctly, this code will produce the MIC and will print in on screen. You can then verify by comparing this MIC from MIC produced by coWPAtty and aircrack. 

As of my understandings, the only thing that's probably can cause some issue is step 3 while looking at the payload. If you are writing something on this, you can first go for each hash independently and then bind them together. While implementing the functions, note which version of WPA you are computing MIC for. WPA use MD5 algorithm while WPA2 use SHA1 algorithm. 
