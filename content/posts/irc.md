---
title: "Irc"
date: 2019-10-04T15:57:37-05:00
draft: true
---

Set default nick(s)

## Servers

Add a server (with ssl)

```
/server add freenode chat.freenode.net/6697 -ssl
```

Automatically connect to a server on startup.

```
/set irc.server.freenode.autoconnect on
```


## Nicks

Set global default nicks

```
/set irc.server_default.nicks comma,separated,list,of,nicks
```

Set default nicks for a server

```
/set irc.server.freenode.nicks "mynick,mynick2,mynick3,mynick4,mynick5"
```


## Links

- [WeeChat quick start guide](https://weechat.org/files/doc/stable/weechat_quickstart.en.html)
- [WeeChat user's guide](https://weechat.org/files/doc/stable/weechat_user.en.html)
- [WeeChat (archwiki)](https://wiki.archlinux.org/index.php/WeeChat)
- [Nickname Registration (freenode)](https://freenode.net/kb/answer/registration)
- [Freenode Registration Help (gist)](https://gist.github.com/micahw156/7417885)

### channels

- ircs://freenode.net/#lobsters
- ircs://freenode.net/#lobsters-feed

