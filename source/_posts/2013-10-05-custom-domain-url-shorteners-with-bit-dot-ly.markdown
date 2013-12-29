---
layout: post
title: "Custom Domain URL Shorteners with bit.ly"
date: 2013-10-05 00:09
comments: true
categories: Tutorial URL Shortening
---

I recently acquired [leav.in](http://leav.in) because I wanted to make my own URL shortening service. After spending a few hours making a little Rails application that connected to a backend service and a nice little UI, I decided to actually google "custom domain URL shortner." Low and behold, [bit.ly](http://bit.ly) offers a free service, bit.ly pro that provides custom domain short URL service and then some! It was a little difficult to fiddle through (not because of configuration, but just finding stuff), so here's a little walk through to help you out!

<!-- more -->

1. Buy a short domain name. I recommend [name.com](http://name.com) just because they give great tools for managing DNS, are cheap, and their DNS updates almost instantly.
2. Create a bit.ly account:

    ![Signup for bit.ly](http://media.tumblr.com/tumblr_ljjh9aPGWg1qhdc0f.png)

3. Add bit.ly pro to your account (it's free)
4. Enter your settings panel:

    ![Settings Panel](http://media.tumblr.com/tumblr_ljjhjmF8hv1qhdc0f.png)

5. Click on your bit.ly pro settings:

    ![bit.ly pro settings](http://media.tumblr.com/tumblr_ljjhlkrzCN1qhdc0f.png)

6. Go and modify your DNS records with your host as described in the grey box. Do this **first** so that the changes can populate as you do step

7. Enter your short URL domain in the box provided and click "Add Short Domain".

    ![Add short domain](http://media.tumblr.com/tumblr_ljjhtlM1zN1qhdc0f.png)

8. Be sure to verify that your DNS is configured correctly. Depending on your provider, you may need to wait up to 48 hours for these changes to populate:

    ![DNS](http://media.tumblr.com/tumblr_ljjhwqJQ0k1qhdc0f.png)

9. Unless something terrible went wrong, you should see something similar to the following:

    ![Final](http://media.tumblr.com/tumblr_ljjhy36AsG1qhdc0f.png)