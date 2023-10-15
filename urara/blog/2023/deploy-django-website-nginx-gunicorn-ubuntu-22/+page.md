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

sudo apt update
sudo apt install python3-pip python3-dev nginx

When installed, let's now create a python virtual environment.

sudo pip3 install virtualenv
sudo apt install python3-virtualenv

Now that our virtual environment is created, we'll now create a directory which will host our Django applicaiton.

If you have your project files locally on your computer, just make it directory and paste all the files in it. However, if you have a github repo, you'll need to clone it.

Forexample:
git clone https://github.com/rashiddaha/blogprojectdrf.git

Then we'll go to the directory created and create a virtual environment by:

cd ~/blogprojectdrf
then
virtualenv env

Now activate this virtual environment by:

source env/bin/activate



### Installing Django and Gunicorn

Install django by

**pip install django gunicorn**



