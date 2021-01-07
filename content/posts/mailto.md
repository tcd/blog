---
title: "Mailto"
date: 2019-09-07T13:07:01-05:00
draft: true
---

Have you ever gone to a website looking to get some contact information,
looked around for a bit, found that link, clicked, and had Mail or Outlook spin itself up?

If you haven't, I envy you.
If you have, then you know of the scourge: `mailto` links.

## Firefox

Disabling `mailto` links in Firefox is actually super easy, and can be done in 3 simple steps:

1. Go to this address: `about:config`
2. Search for this setting: `network.protocol-handler.external.mailto`
3. Set it to `false`

That's it!
I didn't even have to restart Firefox.

(Just a note, I did this using Firefox version `68.0.2 (64-bit)`)

## Chrome

Unfortunately, things aren't quite as simple for Chrome.

The best solution I found was to change the default email handler to Gmail,
which still results in an action whenever a `mailto` link is clicked, but it
keeps the Mail app from opening itself, which I'll call an improvement.

- `chrome://settings/handlers`

## Resources

- Mailto
  - [mailto (Wikipedia)](https://en.wikipedia.org/wiki/Mailto)
- Firefox
  - [Browser annoyances - mailto: links](https://www.dedoimedo.com/computers/browser_annoyances_mail.html) (01/09/09)
  - [how to block mailto in firefox running on windows 10 (Stack Exchange)](https://serverfault.com/a/774820/526567) (05/04/16)
- Chrome
  - Chrome Support (not very helpful)
      - [Can't edit protocol handlers (Google Chrome Help)](https://support.google.com/chrome/forum/AAAAP1KN0B0sPhxiTQlf4s/?hl=en&gpf=%23!topic%2Fchrome%2FsPhxiTQlf4s) (07/31/12)
      - [Mailto links open a new window for Gmail (Google Chrome Help)](https://support.google.com/chrome/thread/2305270?hl=en) (03/12/19)
  - Extensions
      - [srebalaji/mailTo-killer](https://github.com/srebalaji/mailTo-killer)
      - [Famlam/mailto-chromeextension](https://github.com/Famlam/mailto-chromeextension)
  - [How to Set Gmail as Your Browser's Default Email Client for Mailto Links](https://blog.hubspot.com/marketing/set-gmail-as-browser-default-email-client-ht) (08/28/18)
  - [How To Fix Email Links So They Open In Chrome](https://www.timeatlas.com/email-links-chrome-gmail/) (06/23/18)
  - [How do I stop Gmail from opening mailto links in Chrome? (Stack Exchange)](https://superuser.com/questions/718154/how-do-i-stop-gmail-from-opening-mailto-links-in-chrome) (02/17/14)
