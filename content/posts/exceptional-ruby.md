---
title: "Exceptional Ruby"
date: 2019-09-13T10:33:16-05:00
draft: true
categories: [ruby]
tags: [ruby]
---

## Links

- [Ruby Exceptions (rubylearning.com)](http://rubylearning.com/satishtalim/ruby_exceptions.html)C
- [Exception (ruby 2.5.6)](https://ruby-doc.org/core-2.5.6/Exception.html)
- [ruby/ruby/error.c](https://github.com/ruby/ruby/blob/master/error.c#L2389)
- Misc
  - [Top 10 errors from 1000+ Ruby on Rails projects (and how to avoid them)](https://rollbar.com/blog/top-10-ruby-on-rails-errors/)
  - [Ruby's Exception vs StandardError: What's the difference?](https://www.honeybadger.io/blog/ruby-exception-vs-standarderror-whats-the-difference/)
  - [Ruby Exception Handling: SystemCallError](https://airbrake.io/blog/ruby-exception-handling/systemcallerror)

### Real World Examples

- [aws/aws-sdk-ruby](https://github.com/aws/aws-sdk-ruby/blob/0a8a637137a69f2109b1a181e25f489cc59955be/gems/aws-sdk-core/lib/aws-sdk-core/errors.rb)
- [jnunemaker/httpie](https://github.com/jnunemaker/httparty/blob/master/lib/httparty/exceptions.rb)
- [jekyll/jekyll](https://github.com/jekyll/jekyll/blob/master/lib/jekyll/errors.rb)
- [Homebrew/brew](https://github.com/Homebrew/brew/blob/master/Library/Homebrew/exceptions.rb)
- [Homebrew/brew](https://github.com/Homebrew/brew/blob/master/Library/Homebrew/cask/exceptions.rb)
- [Shopify/liquid](https://github.com/Shopify/liquid/blob/master/lib/liquid/errors.rb)
- [wpscanteam/wpscan](https://github.com/wpscanteam/wpscan/tree/master/lib/wpscan/errors)
- [jwt/ruby-jwt](https://github.com/jwt/ruby-jwt/blob/master/lib/jwt/error.rb)
- [doorkeeper-gem/doorkeeper](https://github.com/doorkeeper-gem/doorkeeper/blob/master/lib/doorkeeper/errors.rb)
- [octokit/octokit.rb](https://github.com/octokit/octokit.rb/blob/master/lib/octokit/error.rb)
- [rubocop-hq/rubocop](https://github.com/rubocop-hq/rubocop/blob/master/lib/rubocop/error.rb)
- Rails
  - Active Model – Model interfaces for Rails (Very Advanced Exceptions)
    - [error.rb](https://github.com/rails/rails/blob/master/activemodel/lib/active_model/error.rb)
    - [errors.rb](https://github.com/rails/rails/blob/master/activemodel/lib/active_model/errors.rb)
    - [nested_error.rb](https://github.com/rails/rails/blob/master/activemodel/lib/active_model/nested_error.rb)
  - Active Record – Object-relational mapping in Rails
    - [errors.rb](https://github.com/rails/rails/blob/master/activerecord/lib/active_record/errors.rb)
  - Active Storage - Upload and reference files in cloud services
    - [errors.rb](https://github.com/rails/rails/blob/master/activestorage/lib/active_storage/errors.rb)
  - Active Resource - Connects business objects and REST web services
    - [exceptions.rb](https://github.com/rails/activeresource/blob/master/lib/active_resource/exceptions.rb)
