---
layout: post
title: "Creating a Github Blog Using Octopress"
date: 2013-12-29 15:21
comments: true
categories: github octopress
---

Warning This article assumes you already installed RVM and Ruby.

Quick Summary for creating and deploying a post in Octopress

$ rake new_post["New Post"]
$ rake generate
$ git add .
$ git commit -am "Some comment here." 
$ git push origin source
$ rake deploy
Installation Process of Octopress

<!-- more -->

Octopress is a framework designed for Jekyll to build a static website. It’s very easy to setup a blog with Octopress. Post are edited using Markdown. Yes, you need to have a Github account at Github.com.

Go to the terminal and clone the Octopress repo:

git clone git://github.com/imathis/octopress.git octopress

cd octopress
Check the version of Ruby is 1.9.2. This version is required.

ruby --version

bundle install
This command installs Octopress

rake install
Deploying to Github

Create a new Github repository. If you are creating a personal blog create a repo called:

username.github.com
After creating the repo, run the following command.

$rake setup_github_pages
Which is supposed to:

init a git repo
rename the branch from master to source
add your repo to origin.
Running the previous command shows this:

Enter the read/write url for your repository
You have to enter it like this:

git@github.com:username/username.github.com.git
For me it didn’t rename the branch from master to source or add my remote repo. I did it manually (see below)

Add your remote repo

Check what remote repositories you have:

git remote -v
My output was:

octopress   git://github.com/imathis/octopress.git (fetch)
octopress   git://github.com/imathis/octopress.git (push)
To add your repo do:

git remote add origin git@github.com:username/username.github.com.git
Rename the branch from master to source

$git branch
* master
$git branch -m master source
$git branch
* source
Preview on development stage

$ rake preview
Then browse to:

localhost:4000
If you get this error:

Sorry, I cannot find /
Read this link: Deploying to a Subdirectory

First push to Github

$rake generate
$git add .
$git commit -am "First deploy to github." 
$git push origin source
$rake deploy
Create a new posting

$rake new_post["Creating a Github Blog Using Octopress"]
Go to the app folder source/_posts to find the new posting

Edit the posting and then follow these steps

$rake generate
$git add .
$git commit -m "Initial blog post." 
$git push origin source
$rake deploy
Add a custom domain

Go to source folder and create 2 files :

(mate if you are using Textmate)

cd source
mate CNAME
mate .nojekyll
Open the CNAMe file and this line:

www.yourdomain.com
The NoJekyll file will make Octopress works in Github Pages.

Push again to github

rake generate
git add .
git add -am 'domain configuration'
git push origin source
rake deploy
Github need time to read your CNAME and updating the sites.
