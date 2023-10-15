---
title: Deploy a Django Application on Ubuntu 22.04 with Gunicorn & NGINX
tags:
  - django
  - deployment
  - development
  - drf
  - python
  - ubuntu
categories:
  - Linux
  - Development
summary: A Detailed walkthrough of the process of deploying a django application on a ubuntu server from scratch. This guide covers the deployment stages with Gunicorn, NGINX and Postgresql.   
created: 2023-09-11
lastmod: 2023-09-11
image: https://github.com/hash3liZer/khatta/assets/29171692/c70a5dc7-5294-45b7-8a9f-8a04ac9214b3
---

## Introduction

Hi, its been a while since i wrote something on my blog. Today, i am going to write about the process of deployment of a django application on a Ubuntu 22.02 live server. I'll try to cover as much details as i can and mention about the common issues i normally faces while following the process. This article is also a kind of reminder for myself for the tutorials and blog that i followed and the issues i ran into. So, we are going to cover this deployment process through **Gunicorn**, **NGINX** and optionally using **Postgresql** database. 

## Tutorial

So, without wasting any further time. Lets jump right into the details. 

### Pre-Reqs

The foremost thing are the pre-reqs that we need to follow this tutorial. First is a server with a public IP. Many of you who are reading this might already have one before moving one. Well, if you don't you can simply get one from any of the hosting services or Cloud platforms. Personally, i use **DigitalOcean** or **AWS** most of the time. And also, for the sake of this tutorial i'll be using a `t2.micro` instance of EC2 service from AWS. 

But in general what you need is an online server with **Ubuntu 22.04** installed and with publicly accessibly ports. Thi should also work just fine with Ubuntu 20.04. Let me know in comments if someone tests it. 

### Installing Packages

First, lets install the required packages. 

```
sudo apt update

sudo apt install python3-pip python3-dev nginx
```


When installed, let's now create a python virtual environment.

```
sudo pip3 install virtualenv

sudo apt install python3-virtualenv
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/1faba017-2130-48b4-9df2-d750dd501f22)

Now that our virtual environment is created, we'll now create a directory which will host our Django applicaiton.

A quick note here that If you have your project files locally on your computer, just make it directory and paste all the files in it. However, if you have a github repo, you'll need to clone it.

Forexample:
git clone https://github.com/rashiddaha/blogprojectdrf.git

Then we'll go to the directory created and create a virtual environment by:

```
cd ~/blogprojectdrf
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/a5cabe58-21bd-4da2-8a1a-093abcb9be6f)


then

```
virtualenv env
```

Now activate this virtual environment by:

```
source env/bin/activate
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/11a63e4d-f7e4-4478-95b4-b07f174e0d0b)


If your project needs dependencies, you would've already installed them, i've just installed the requirements as it is a test project.



### Installing Django and Gunicorn



Install django gunicorn by

```
pip install django gunicorn
```


![image](https://github.com/hash3liZer/khatta/assets/61083990/0b50a975-e285-4ece-851d-129e68816995)


If you have any migrations to run, perform the action:

```
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/b52d7c0d-4f54-4ff3-9292-8c111d2fa9ba)

![image](https://github.com/hash3liZer/khatta/assets/61083990/005448c7-ac69-42ec-af56-9141a509abad)





### Configuring Gunicorn

To configure we'll have to deactivate the virtual environment

enter


```
Deactivate
```


then 


```
sudo vim /etc/systemd/system/gunicorn.socket
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/93d7265e-c27d-4f79-a76d-d557f2fc661c)




Enter the following content to the gunicorn.socket file


```
[Unit]
Description=gunicorn socket
[Socket]
ListenStream=/run/gunicorn.sock
[Install]
WantedBy=sockets.target
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/cc175aae-6b7f-4106-92be-e0f50516e060)

Gunicorn.socket is done now we'll create a gunicorn service file

```
sudo vim /etc/systemd/system/gunicorn.service
```

Paste the follwing content in the service file:

```
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target
[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/blogprojectdrf
ExecStart=/home/ubuntu/blogprojectdrf/env/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          blog.wsgi:application
[Install]
WantedBy=multi-user.target
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/016b15f7-304d-401d-8db3-3275036148ec)

Remember : change the paths and names to file according to your situtaion.

Configuration is done now it's time to start and enable it.

run

```
sudo systemctl start gunicorn.socket

sudo systemctl enable gunicorn.socket

```

![image](https://github.com/hash3liZer/khatta/assets/61083990/02f0eb6b-dea7-40f8-b597-78cb777e2864)


### Configuring Nginx as a reverse proxy


Now we'll move to the follwing directory


```
cd /etc/nginx/sites-enabled/
```


Create a configuration file for Nginx also by:

```
sudo vim /etc/nginx/sites-available/blog
```



![image](https://github.com/hash3liZer/khatta/assets/61083990/ed5a8862-c941-4e1e-bd70-ca67874be153)

paste the following content in it:

```
server {
    listen 80 default_server;
    server_name _;
    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/ubuntu/blogprojectdrf;
    }
    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/cf1f8a35-6f14-4af7-8a6c-66cd44156a81)


**Make sure all the paths are correct and the static directory name is according to your paths and names.**

now the file has been created, to activate it, we'll run the following command:


```
sudo ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/
```


To load the static file of yourn project, run the follwing command:

```
sudo gpasswd -a www-data <username>
```

In my case, it is ubuntu. you can enter your username here.


![image](https://github.com/hash3liZer/khatta/assets/61083990/320b9559-c7da-47ac-8cac-ab21818c77dd)


Now we'll restart the Nginx and Gunicorn and there services by:

```
sudo systemctl restart nginx

sudo service gunicorn restart

sudo service nginx restart
```

![image](https://github.com/hash3liZer/khatta/assets/61083990/926fab98-715b-46c9-9537-014da1f81dbf)



*Note: Make sure no other service or previous configuration is using the 0.0.0.0:80. if a services is using this previously nginx will not restrat successfully. To avoid the error the services to config files must be identified and modified.*

![image](https://github.com/hash3liZer/khatta/assets/61083990/91e45b9b-cc43-4683-b8bb-b198dadb82d4)

As you can see only this file blog which we used in the deployement is using the port 80.




Incase you run into some error, use the following command and it'll give the useful details regarding the error.

```
sudo tail -f /var/log/nginx/error.log
```


### Result
Now we'll enter the public ip of the ubuntu vm on the web browser and /admin to get into the login page as this was my project.

![image](https://github.com/hash3liZer/khatta/assets/61083990/a0a95772-30db-4c2e-af4a-f074f2b68788)

And Boom! we've successfully deployed our website on Ubuntu server on AWS using Nginx and Gunicorn.

Thank you for visiting my website for this tutorial.

Print("Good-bye")


 

 







