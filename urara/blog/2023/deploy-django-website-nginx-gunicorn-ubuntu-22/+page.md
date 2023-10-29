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

First, lets update our **ubuntu** machine and install the required packages: 
```bash
sudo apt update
sudo apt install -y nginx python3 python3-dev python3-pip python3-virtualenv libpq-dev postgresql postgresql-contrib
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/5796e18f-36ee-4cb5-bd9c-7a8398627981)

Before going forward, lets escalate to the `root` shell as we might run into the permission issues again and again. And don't worry, we will see the project and permissions of the other files at the last: 
```bash
sudo -s
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/be2a19b9-c46a-4a72-b70f-dbb0446dd33c)

### Setting up Project Directory

Now, lets move to the `/var/www/` directory where we are going to place our project folder. I am going to setup a project from scratch for demo purposes using `django-admin` command. But if you already have one, make sure its uploaded correctly. I normally used `rsync` for this: 

```bash
rsync -arvz -e 'ssh -p <port-number>' --progress --delete /path/to/local/folder user@remote-server:/var/www/
```

For now, i will setup a new project from scratch and name it `myweb`. Lets install django and initialize an empty project: 
```bash
cd /var/www
pip3 install django
django-admin startproject myweb
```

Move to `myweb` and initialize new _virtual environment_: 
```bash
cd myweb/
virtualenv venv
```

Moving forward, activate the virtual environment and install all the necessary packages that you might have placed in `requirements.txt`. 
```bash
source ./venv/bin/activate
pip3 install -r requirements.txt     # In case you have one
pip3 install django gunicorn psycopg2-binary
```

### Setting up Postgres (Database)

You could move forward without this step if you are planning on using some database or the default sqlite. But please note that you will have to install the relevant packages for that. While in this case, i am only focusing on `postgres`. 

Launch `postgres`: 
```
sudo -u postgres psql
```

The next steps are supposted to be inside the `postgres` terminal. Create a new database. I am naming it `hashbase`. Setup a new user and assign it to the database that we just created: 
```
CREATE DATABASE hashbase;
CREATE USER hashbaseuser WITH PASSWORD 'password1122';
GRANT ALL PRIVILEGES ON DATABASE hashbase TO hashbaseuser;
```

Next, we will modify a couple of our database settings for better processing and django functions: 
```bash
ALTER ROLE hashbaseuser SET client_encoding TO 'utf8';
ALTER ROLE hashbaseuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE hashbaseuser SET timezone TO 'UTC';
```

Quit:
```bash
\q
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/a450e21a-dfbe-4122-986f-8b5dc9e5c284)

### Project Settings

We will look at the project settings now that needs to be replaced or modified. Considering we are in the project directory located at `/var/www/myweb`. Lets edit the `settings.py` file: 
```bash
nano myweb/settings.py
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/3f6ad510-3443-4499-90ba-2ef8098d0989)

Edit the `ALLOWED_HOSTS` list variable to include all the **IPs** or **Hostnames** that you plan on using for the website. In here, i am simply going to put the **PUBLIC IP** of the server i am on. You can put domain names if you are going to configure one with the website. 

```python
...

ALLOWED_HOSTS = [
  '13.229.230.156',      # Public IP of the Server
  'mydomain.com',        # In case you have a domain, you can skip the IP Address
  'someotherhostetc',
]

...
```

Now, move a bit below to this and find the `DATABASES` variable section. By default it is configured to use `sqlite3` as its database. We will change the settings to use `postgresql`: 
```python
...

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'hashbase',
        'USER': 'hashbaseuser',
        'PASSWORD': 'password1122',
        'HOST': 'localhost',
        'PORT': '',
    }
}

...
```

After this, we need to setup a `static` and `media` directory where our project static files are going to be stored. The `media` folder will contain files that are supposed to be uploaded by the user of the application. So, again in the `settings.py` file, move at the end of the file and find the line `STATIC_URL = 'static/'` and add some new content below it: 
```python
...

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'public'
MEDIA_URL  = 'media/'
MEDIA_ROOT = BASE_DIR / 'media'

...
```

The `STATIC_ROOT` defines the folder where the public content like _css,js or imgs_ are going to be stored upon running the `collectstatic` command on `manage.py` file. Please note that its totally different from the `STATICFILES_DIRS` variable which is used to define the directories to locate static files. Think of `STATIC_ROOT` as more of a **production** specific variable. 

### Spin up the Project

Lets move towards spinning up the project for the public. For that, we will do the normal django commands like migrations and super user. 

Run migrations and create a superuser: 
```
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser     # Enter your credentials for the superuser when prompted
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/bf41701c-c35d-448e-adbc-ff111a9ef7e6)


After this, we will run the `collectstatic` command to locate all the static files we have in our project and put them to the folder that we defined at `STATIC_ROOT` variable. These static files will be served by the `nginx` server and not from django like we see during the development.

```python
python3 manage.py collectstatic
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/a79e25e0-5960-4cd5-ab97-f359cc2de470)

You can now execute the `runserver` command on public interface to see your website. Before also make sure nginx is not using the port `80` by default: 
```python
service nginx stop
python3 manage.py runserver 0.0.0.0:80
```

Now, if you access your website at you would be able to see your project:
```python
http://PUBLCI_IP_ADDRESS
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/f1bea206-f36f-4df3-8448-f5b2824587c1)


Finally, back in the `settings.py` put the `DEBUG` value to `False`. You can keep it enabled if you are going to debug the project or facing some other issue. But make sure to put the value to `False` for the production cases:
```
nano myweb/settings.py

...
DEBUG = False
...
```

At this point, we have our project all ok. But this is not how we are going to host the website actually. 

### Setting up Gunicorn

Gunicorn is the server service that we are going to configure with `nginx` for the public. We will configure a new `systemd` service for this. But before, we will test if `gunicorn` is really working or not. So, simply bind gunicorn to the `0.0.0.0` and test if we can access the website at port `80` like we did before. Note that we are still inside `/var/www/myweb` directory

```bash
gunicorn --bind 0.0.0.0:80 myweb.wsgi
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/8c4e703d-fcf7-4658-b358-1addaa74f6fb)

Fire up `nano` again for the gunicorn service and do the configuration: 
```bash
nano /etc/systemd/system/gunicorn.service
```

Inside the file. I'll not get into much details of what is happening here. But you can refer to the `systemd` documentation for more in depth detail. However, we will review the `Service` section here:
```python
[Unit]
Description=gunicorn daemon
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/myweb
ExecStart=/var/www/myweb/venv/bin/gunicorn --access-logfile - --workers 3 --timeout 300 --bind unix:/var/www/myweb/myweb.sock myweb.wsgi:application

[Install]
WantedBy=multi-user.target
```

The `User` and `Group` defines the privileges the command is going to be executed with. The complete command is specified with `ExecStart` variable. Make sure to specify `WorkingDirectory` as well. Otherwise, gunicorn wouldn't be able to locate the `myweb.wsgi` on path. Save the file.

Make sure to change the project's owner before starting gunicorn: 
```bash
chown www-data:www-data -R /var/www/myweb
```

Start the service after saving and make that its running and doesn't have any errors. If there are errors, you will need to fix them before moving forward: 
```bash
systemctl daemon-reload
systemctl restart gunicorn.service
systemctl status gunicorn.service
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/4f2ca54a-e633-4593-86f1-a292d4e899e6)

You can see more detailed logs of gunicorn if there are errors using: 
```bash
sudo journalctl -u gunicorn
```

### Setting UP NGINX

This is the last step. We will configure `nginx` which in short is the public server and will take requests from the public and forward it to gunicorn as a reverse proxy. Remove the default enabled nginx website and create a new `nginx` project file:
```bash
rm /etc/nginx/sites-enabled/default
nano /etc/nginx/sites-available/myweb
```

Inside the file, configure your web server: 
```nginx
server {
    listen 80;
    server_name DOMAIN_OR_PUBLIC_IP;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        alias /var/www/myweb/public/;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    }

    location /media/ {
        alias /var/www/myweb/media/;
    }

    location / {
        include proxy_params;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        proxy_pass http://unix:/var/www/myweb/myweb.sock;
    }
}
```

In the above configuration, make sure you have changed it according to your requirements. One thing to look out for is the `server_name` directive. If you are working with a domain name, make sure to replace it correctly. Another thing would be the paths that are mentioned in the configuration. Make sure all of the mentioned paths in your correct according to your settings. 

Save the file and enable this nginx project by creating its soft link at `sites-enabled` directory: 
```python
ln -s /etc/nginx/sites-available/myweb /etc/nginx/sites-enabled/myweb
```

Check nginx configuration and restart nginx: 
```
nginx -t
systemctl restart nginx
systemctl status nginx
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/bbab172e-0279-4ac6-a274-1fa9181530da)

If everything goes correctly, you should be able to see the nginx service running and if you visit the **PUBLIC IP** or **Domain Name** now, you will see your website. For the final test, visit the `/admin` page to make sure the static files are also served correctly from our nginx service: 
```python
http://PUBLIC_IP_ADDRESS_OR_DOMAIN/admin
```

![image](https://github.com/hash3liZer/khatta/assets/29171692/f3b0c7d0-3dff-40fd-b17f-4a22f280cc09)


In case your static are not served properly, you can check the `nginx` error logs at: `/var/log/nginx/error.log` and debug the issues. 

## Conclusion

Thanks for making it through. All in all, we saw how to host a django website using gunicorn, nginx and postgresql. Its not very tricky but yes sometimes debugging the configuration files can take time. So, while doing your own, make sure to double check your configuration files and make sure that they are making sense for what they are supposed to do. 
