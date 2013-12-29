---
layout: post
title: "Creation of remote git branch"
date: 2013-12-29 16:17
comments: true
categories: git branch
---


1056
down vote
accepted
First, you create your branch locally

git checkout -b your_branch
The remote branch is automatically created when you push it to the remote server. So when you feel for it, you can just do

git push <remote-name> <branch-name>
Your colleagues would then just pull that branch, and it's automatically created locally.

<!-- more -->

Note however that formally, the format is:

git push <remote-name> <local-branch-name>:<remote-branch-name>
But when you omit one, it assumes both names are the same.

From a comment below:

You might want to use git push -u <remote-name> <branch-name> instead, so that a subsequent git pull will know what to do.

– Bart Schuller

The -u option sets-up a upstream branch:

For every branch that is up to date or successfully pushed, add upstream (tracking) reference, used by argument-less git-pull(1) and other commands.
