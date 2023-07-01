---
title: A Guide to Zone Transfer, DNS Zone Takeover and Subdomain Takeover
tags:
  - dns-zone-takeover
  - dns-zone-transfer
  - subdomain-takeover
  - bugbounty
  - infosec
  - reconnaissance
  - automated-tool
categories:
  - Bug Bounty
  - Projects
summary: In this guide, we will be looking over vulnerabilites associated with a domain normally occured due to the negligence from the develper team. The terms we will see are Zone Transfer, DNS Zone Takeover and Subdomain Takeover. 
created: 2023-06-30
lastmod: 2023-06-30
image: https://github.com/hash3liZer/khatta/assets/29171692/755e47ec-8f67-45e9-a7cb-04efe7584127
---

## Introduction 
DNS have been there for years now to help you find things normally you wouldn't remember. In this guide, we will go through the following set of problems that a third party can find and take advantage of in negative terms:

* DNS Zone Transfer
* Subdomain Takeover
* DNS Zone Transfer

## Subrake
The primary reason i wrote this blog post was this project i am working on: [Subrake](https://github.com/hash3liZer/Subrake). It's an automated DNS scanner to cover various issues in a single go. Let me know what you think about it in the comment section...

## Explanation
### Zone Transfer
Zone Transfer itself is not a vulnerability and is a procedure followed to transfer the records of a domain from one DNS server to another. For example, you need to replicate the records of your domain available in `namecheap` to AWS `Route53`.

In a Zone transfer, the dns server sends a complete dns records file to another server. The file contains everything the DNS server has regarding that domain including its `A`, `AAAA`, `CNAME`, and `SOA` records. This includes the information which publicly isn't accessible. 

For example, you can't access the `CNAME` records of any domain without having to brute force your way into it. But if the DNS server itself is offering the service, kaboom. 

Most of the pople in industry are already aware of Zone transfer, so lets directly jump to the part **How to find it?**. There are many tools available in the wild to find `zone transfer`. But the famous and the most simple one is `dig`: 

```bash
dig zonetransfer.me -t AXFR +nocookie @dns_address
```

* The `-t AXFR` option is a type of query to request zone transfer details.
* The `+nocookie` option would disable the use of DNS cookies.
* And additionally, you can specify `@dns_server` which can be skipped to use default DNS servers. I would highly recommend this option if you a playing a CTF or inside a network where a private DNS server is accessible.

If successfull, this would list all the DNS records. This can also be accomplished using `subrake -d zonetransfer.me` and you would get: 

<img width="828" alt="image" src="https://github.com/hash3liZer/khatta/assets/29171692/e0552efd-45d1-41fc-ad00-63706be3849a">

### Subdomain Takeover
Subdomain Takeover unlike it sounds is actually the takeover of the service that subdomain is pointing to. Lets say `marketing.domain.tld` was pointing to an Amazon `S3` bucket or `ELastic Beanstalk` service which actually didn't exist. 

A third party can come and claim this service. Now what happens is that the party that claimed the service can host whatever they want on that subdomain but that ofcourse is limited to what the service has to offer. 

Most of the people in industry have been creating their automations of this. Some use their own tools and some have sort of created a workflow. 

You can go for a `oneliner`: 
```python
subfinder -d HOST >> FILE; assetfinder --subs-only HOST >> FILE; amass enum -norecursive -noalts -d HOST >> FILE; subjack -w FILE -t 100 -timeout 30 -ssl -c $GOPATH/src/github.com/haccer/subjack/fingerprints.json -v 3 >> takeover ; 
```

Or you can find the subdomains first using different tools and public sources and probably use a tool to check the takeover. 
```python
python3 sublist3r.py -d target.com
amass enum -d target.com
...
```

Checking the takeover: 
```python
subrake -d target.com -w ./finalwordlists.txt
```

<img width="828" alt="image" src="https://github.com/hash3liZer/khatta/assets/29171692/ce1559b0-e5fe-4fdc-ae2c-98de252c9970">

The list of services that are currently known to vulnerable to Subdomain Takeover can be found at: **[Can I Takeover XYZ](https://github.com/EdOverflow/can-i-take-over-xyz)**

### DNS Zone Takeover
Zone Takeover is a term not too old right now and its actually is as it sounds unlike subdomain takeover. And it can be more **severe** as you have the control over the complete zone. In order words, you can host your own `records` and are not limited to the service being used like subdomain takeover. 

The normal procedure that is being followed or atleast i follow this:

* I purchase the domain from namecheap or godaddy.
* I create a new `Hosted Zone` in AWS `Route53` service.
* The hosted zone gives me a set of nameservers.
* I enter these nameservers into the Authoritative nameservers section in GoDaddy or namecheap.
* Then i use the `Route53` service instead of GoDaddy or Namecheap to manage the records like `A`, `AAAA`, or `CNAME`. 

Infact, if you ever worked with Cloudflare, you would know that you create a new website in Cloudflare. In result you get the nameservers. You then set the nameservers with the domain you purchased. 

After doing so, you add/edit/remove the records within the cloudflare panel. Lets suppose, after a year you plan to not use the Cloudflare service anymore. So, you delete your website from cloudflare but doesn't actually remove the authoritative entries in your domain settings from godaddy. 

Since the nameserver entries already exist and still pointing to the service (aka cloudflare in this case), a third party can claim the service which would lead to zone takeover. 

If you understand the above scenario, you can relate it to the subdomain takeover where you claim the stale service. But here, its the stale zone. 

#### Finding Zone Takeover
The good thing with zone takeover is you don't have to brute force your way into it or find anything publicly. The information is already there, you just have to make sure its in the right condition. 

The first step would be to get the nameservers of the domain. We can use `dig` for that: 
```bash
dig shameerkashif.me +trace +all
```

Or you can directly get the `NS` records and start looking from there. 
```
dig shameerkashif.me NS
```

<img width="894" alt="image" src="https://github.com/hash3liZer/khatta/assets/29171692/aba8e709-0b33-486a-ac5c-c0ab48264625">

The against each NS record, check if any of them fails to responsd. If it does, it can probably be vulnerable to zone takeover. The case it failes, you will have the status as **REFUSED** or **SERVFAIL**: 
```
dig shameerkashif.me @ns1.digitalocean.com
```

You can also check for `SOA` which is what i would like to do instead (to be more concise): 
```
dig shameerkashif.me @ns1.digitalocean.com SOA
```







