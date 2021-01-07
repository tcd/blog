---
title: "Versioning"
date: 2019-08-30T15:50:41-05:00
draft: true
---

# Software Versioning

I have a number of personal projects that I keep on GitHub, and I wanted to know the best
practices for releasing them to the wide world.  One item on the list is maintaining proper
version numbers.

In case you haven't heard of it, [Semantic Versioning](https://semver.org) is a specification
regarding version numbers and their meanings.

[Keeping a changelog](https://keepachangelog.com/en/1.0.0/) goes hand in hand with adhering to semantic versioning.

## Git Tagging

> ...Git has the ability to tag specific points in a repository's history as being important. 
> Typically, people use this functionality to mark release points (v1.0, v2.0 and so on).

A git tag is more semantic than anything; it's basically an alias for a specific commit.

```sh
# Create a new tag
git tag -a v0.0.1 -m "Initial prerelease tag"

# Share a single tag to a remote
git push origin <tagname>
# Share all local tags to a remote
git push origin --tags
```

## GitHub Releases

## Golang


### `-ldflags`

```sh
date="$(date +%F)"
version=$(git describe --always)
filepath="github.com/tcd/md2pdf/internal/md2pdf"

flags="
  -X $filepath.Version=$version
  -X $filepath.Date=$date
"

go build -ldflags="$flags" -o=build/md2pdf
```


## Resources & References

- Git Tags
  - [2.6 Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
    - [`git-describe`](https://git-scm.com/docs/git-describe)
  - [A Tutorial for Tagging Releases in Git (dev.to)](https://dev.to/neshaz/a-tutorial-for-tagging-releases-in-git-147e)
- Go Versions
  - [Question: Where to keep the version number of a Go program? (reddit)](https://www.reddit.com/r/golang/comments/4cpi2y/question_where_to_keep_the_version_number_of_a_go/)
- `ldflags`
  - [TheHippo/Makefile (gist)](https://gist.github.com/TheHippo/7e4d9ec4b7ed4c0d7a39839e6800cc16)
  - [GcToolchainTricks](https://github.com/golang/go/wiki/GcToolchainTricks)
  - [10 LDFLAGS I Love](https://blog.jessfraz.com/post/top-10-favorite-ldflags/)


