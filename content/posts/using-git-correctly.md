---
title: "Using Git Correctly"
date: 2019-08-05T14:28:29-05:00
tags: ["git"]
categories: ["Development", "GIT"]
draft: true
---

In the last few months at my job, a collogue of mine, who is a git-wizard, has helped me better understand git.
This collogue (An Emacs user) is always trying to get me to switch to SpaceMacs, and while I see the benefits and have even tried using it before, I just can't get it to stick.
Of all the nice features I'm missing out on ([Evil mode][1], [Org mode][2], [Helm][3]), the biggest one is [Magit][4]. 

Magit is a wrapper around Git that provides a blazing fast interface and sane
default commands. I won't get that deep into its benefits, but just wanted to
shout out my coworker, and his inarguably superior git workflow 😉.

- `git pull --rebase`
- `git commit --amend`
- `push --force-with-lease`
- `git reset --soft HEAD~n`
- `git stash show -p stash@{0}`
  - [See what's in a stash without applying it](https://stackoverflow.com/questions/10725729/see-whats-in-a-stash-without-applying-it)

## Related Articles

- [Rewriting history (Atlassian)](https://www.atlassian.com/git/tutorials/rewriting-history)

[3]: https://github.com/emacs-evil/evil
[1]: https://orgmode.org/
[2]: https://github.com/emacs-helm/helm
[4]: https://github.com/magit/magit
