---
title: "Timestamps"
date: 2019-09-09T14:28:02-05:00
draft: false
categories: [ruby]
tags: [ruby]
---

So lets talk about timestamps.

One of the projects I deal with at work is automating inventory updates for one of our clients. 
They have an older POS system that they use to manage their inventory, and any changes made on site are uploaded as CSV files to an FTP server.
I wrote some code to periodically process those changes
and update their website  to match their actual inventory.

Every CSV file is named by the time it was created in the format `yyyy-MM-dd-HH-mm-ss-INVENTORY.CSV`.
Part of the code parses these names into Unix timestamps, so that the files' ages can be more easily compared.
As this project is written in Ruby, I figured `Date.parse` might be appropriate for this task.

```ruby
require 'date'

def to_unix(file_name)
  Date.parse(file_name[0..18]).to_i()
end

puts timestamp('2019-05-24-00-00-35-INVENTORY.CSV')
puts timestamp('2019-05-24-10-00-00-INVENTORY.CSV')
```

```
timestamp.rb:8:in `to_unix': undefined method `to_i' for #<Date: 2019-05-24 ((2458628j,0s,0n),+0s,2299161j)> (NoMethodError)
Did you mean?  to_s
  from timestamp.rb:11:in `<main>'
```

Hmm... well that isn't quite what we were looking for.
Turns out that a `Date` object doesn't have the any `to_i` method, which is what we need to produce our Unix representation. 
A `Time` object does though. So let's convert our date to a time and then to a number.

```ruby
def to_unix(file_name)
  Date.parse(file_name[0..18]).to_time().to_i()
end
```

```
1558674000
1558674000
```

Well we're getting timestamps, but why are the same?
It's because `Date.parse` doesn't look for hour, minute, and second values.
That's easily fixed though, and we should have used time in the first place instead of creating a `Date` and converting it to a `Time`.
Let's try this again:

```ruby
require 'time'

def to_unix(file_name)
  return Time.parse(file_name[0..18]).to_i()
end
```

```
1558674000
1558674000
```

😑

Thanks to some help from a [ruby language server](https://github.com/castwide/solargraph), I figured out that both `Date.parse` and `Time.parse` both make calls to `Date._parse` under the hood; they're using the same function.
Seems to me like someone didn't want to write more extensive parsing logic, so they just reused what they had...

![but that's none of my business](/images/tea.gif)

So in order to make a new `Time` object with hours, minutes, and seconds, each piece needs to be passed in explicitly.
Here's what that code looks like:

```ruby
def to_unix(file_name)
  stamp = file_name[0..18]
  year  = stamp[0..3]
  month = stamp[5..6]
  day   = stamp[8..9]
  hour  = stamp[11..12]
  min   = stamp[14..15]
  sec   = stamp[17..18]
  return Time.mktime(year, month, day, hour, min, sec).to_i()
end
```

```
1558674035
1558710000
```

That's more like it.
And going the other direction is a piece of cake:

```ruby
def from_unix(unix_time)
  Time.at(unix_time).strftime('%F-%H-%M-%S')
end

puts from_unix(1558674035) + '-INVENTORY.CSV'
puts from_unix(1558710000) + '-INVENTORY.CSV'
```

```
2019-05-24-00-00-35-INVENTORY.CSV
2019-05-24-10-00-00-INVENTORY.CSV
```

![it's done](/images/its-done.gif)

Just to recap, here's what we've learned:

1. Ruby's `Date.parse` method ignores hour, minute, and second values.
2. Ruby's `Time.parse` is essentially an alias for `Date.parse`
3. ???
4. PROFIT

And here's our final code:

```ruby
require 'time'

def to_unix(file_name)
  raise ArgumentError, 'Invalid argument' unless stamp.length >= 19
  stamp = file_name[0..18]
  year  = stamp[0..3]
  month = stamp[5..6]
  day   = stamp[8..9]
  hour  = stamp[11..12]
  min   = stamp[14..15]
  sec   = stamp[17..18]
  return Time.mktime(year, month, day, hour, min, sec).to_i()
end

def from_unix(unix_time)
  Time.at(unix_time).strftime('%F-%H-%M-%S')
end
```

## UPDATE

Ruby 2.6.5 introduced a new method that solves this particular problem: [`Time.strptime`](https://ruby-doc.org/stdlib-2.6.5/libdoc/time/rdoc/Time.html#method-c-strptime), which sort of acts like a reverse `strftime`.

Here's the new solution:

```ruby
require 'time'

def to_unix(file_name)
  raise ArgumentError, 'Invalid argument' unless stamp.length >= 19
  stamp = file_name[0..18]
  return Time.strptime(stamp, '%F-%H-%M-%S').to_i()
end

def from_unix(unix_time)
  Time.at(unix_time).strftime('%F-%H-%M-%S')
end
```
