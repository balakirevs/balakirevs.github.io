---
layout: post
title: "Show generated SQL in Rails 3 console"
date: 2013-10-05 00:14
comments: true
categories: Tutorial Rails SQL
---

Have you ever wanted to see the resulting SQL of a query in Rails console? Well, unfortunately there's not really an 'easy' way to do this, other than hacking the console, so here we go.

<!-- more -->

Fire up your Rails console. I'm using Rails 3, but this should would in &lt;3:

```bash
$ rails c
Loading development environment (Rails 3.0.7)
>> _
```

Cool, awesome, great. Now, we need to tell Rails console that we want to show what's being logged:

```bash
$ rails c
Loading development environment (Rails 3.0.7)
>> ActiveRecord::Base.logger = Logger.new(STDOUT)
```

We are creating a new instance of the `ActiveRecord::Base#logger` class. Normally, you would specify this as a file (for example, if you were performing an AR operation that you wanted to log separately from Application logs):

```ruby
ActiveRecord::Base.logger = Logger.new('./logs/custom_log.log')
```
But in this case, we are simply "writing" to `STDOUT`. Now, when you run a query, you should see the supplemental query just as if you were viewing your development server logs!