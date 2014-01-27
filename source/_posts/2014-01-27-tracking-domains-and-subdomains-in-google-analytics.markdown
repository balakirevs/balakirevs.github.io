---
layout: post
title: "Tracking domains and subdomains in Google Analytics"
date: 2014-01-27 18:48
comments: true
categories: google analytics domain subdomain tracking
---

Steps for correct google analytics config tacking the domain and subdomain:

This is only required if cross tracking to other domains and/or subdomains of other domains.
Links and forms do not generally need to be configured for subdomain tracking between the tld and its own subdomains (the whole point of subdomain tracking)

<!-- more -->

3 profiles should be as follows:
All sites - unfiltered (from memory this usually shows the subdomain traffic as referral traffic)
this should remain unfiltered as a "master" profile

www.site.com 
should have a hostname include filter
Filter name - your choice
Filter type - custom
include
Filter Field - hostname
Filter pattern - ^www\.site\.com
case sensitive - no

sub.site.com 
should have a hostname include filter
Filter name - your choice
Filter type - custom
include
Filter Field - hostname
Filter pattern - ^sub\.site\.com
case sensitive - no

if you want to track all traffic across the subdomain and tld you need the following filter applied to a duplicate profileFilter Filter name - your choice
Filter type - custom 
advanced
Field A -> Extract A   Hostname  (.*)
Field B -> Extract B  Request URI  (.*)
Output To -> Constructor   Request URI   $A1$B1
Yes
No
Yes
No

Usual "best practice" would have you elect either the www or non www url as the canonical domain address.
This is both for correct tracking and best SEO practices.. if it all resolves to a single domain address then pagerank doesnt get diluted if search engines arent sure which one to index and split it between the two.. and backlinks also resolve to a single address as well.

So.. if www.site.com is the domain url you would usually use and that you want indexed.. a htaccess 301 redirect would be setup to redirect site.com to www.site.com.. so it all gets seen just as www.site.com.
