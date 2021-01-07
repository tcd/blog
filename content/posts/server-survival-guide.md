---
title: "Clay's Declassified Server Survival Guide"
date: 2019-10-03T09:55:41-05:00
draft: true
---

## tmux

By default, `<prefix>` is `ctrl-b`.

|         ...          |   description    |
| -------------------- | ---------------- |
| `<prefix>:list-keys` | List keybindings |
| `<prefix>?`          | List keybindings |
| `<prefix>%`          | vertical split   |
| `<prefix>"`          | horizontal split |

## ~/.tmux.conf

```conf
# remap prefix to Control + a
set -g prefix C-a
# bind 'C-a C-a' to type 'C-a'
bind C-a send-prefix
unbind C-b
```


## Links

- [A minimalist guide to tmux (medium)](https://medium.com/actualize-network/a-minimalist-guide-to-tmux-13675fb160fa)
- [tmux shortcuts & cheatsheet (gist)](https://gist.github.com/MohamedAlaa/2961058)
