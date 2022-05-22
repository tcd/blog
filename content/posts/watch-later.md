---
title: "Watch Later"
date: 2022-05-22T14:11:00-05:00
tags: ["JavaScript", "javascript", "js", "YouTube", "Programming"]
draft: true
---


## The Problem

YouTube has a handy little feature called the [Watch Later](https://www.youtube.com/playlist?list=WL) playlist.

![add to watch later](/images/watch-later/watch-later.gif)

<br/>
<br/>
<br/>
<br/>

I have a bad habit of adding videos that I think I'll watch later, but never actually do (I'm sure I'm not the only one). \
After about 14 years of this behavior ended up accruing a couple thousand videos.

Unfortunately for me, YouTube is missing a very helpful feature: a way to *clear* your Watch Later playlist.
It does provide an option to *Remove watched videos*, but nothing to sweep away unwatched ones.


## The Solution

So last night I had a little bit to drink and decided to handle it myself.

I know that this is doable with vanilla JavaScript, but I was feeling lazy so i used jQuery.
First thing I did was get it loaded in the developer console; 
turns out that's pretty simple these days:

```js
import("https://code.jquery.com/jquery-2.2.4.min.js");
```


<!-- ======================================================================= -->
<!-- Links                                                                   -->
<!-- ======================================================================= -->

[watch-later-page]: https://www.youtube.com/playlist?list=WL
[watch-later-gif]: /images/watch-later/watch-later.gif
[gist]: https://gist.github.com/tcd/d207da17e4deb2ba480b348648e6961a
[stack-overflow--load-jquery]: https://stackoverflow.com/questions/7474354/include-jquery-in-the-javascript-console

<!-- 😊🙂 -->
<!-- 🙃🙁☹️ -->
<!-- 😑 -->