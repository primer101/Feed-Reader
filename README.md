## Feed Reader Testing project

A project from the Front-End Web Developer Nanodegree in [Udacity](https://www.udacity.com). It is about to write a number of tests against a pre-existing application with Jasmine, to test the underlying business logic of the application as well as the event handling and DOM manipulation.

### To run the application

---

1. Clone a copy of the  git repo by running: 

   `git clonehttps://github.com/primer101/Feed-Reader.git `

2. Open *index.html* in your browser to see the working tests.

The testing code is in */jasmine/spec/feedreader.js*.

Live Demo in [Feed Reader](http://ldaudinot.atwebpages.com/feedreader)

### Tests implemented
---
- RSS Feeds:
  - 'are defined': tests that a array the feed objects (allFeeds) is defined.
  - 'should have an *URL* defined ': tests that allFeeds objects have an *URL* property and it is not empty.
  - 'should have an *name* defined ': tests that allFeeds objects have an *name* property and it is not empty.
- The menu:
  -  'should be hidden by default': ensures the menu element is hidden (.menu-hidden class) by default.
  - 'should toggle the visibility when clicked': ensures the menu toggle visibility when the menu icon is clicked. 
  - items templates:
    - 'should be parsed well': tests the parsing of the  Handlebars template for menu items.
- Initial Entries:
  -  'should be an entry at least': ensures that, when the loadFeed function is called and completes its work, there is at least an .entry element within the .feed container.
  - 'should show the correct information': the parsing of the  Handlebars template for feed entries load the correct information.
- New Feed Selection: 
  - 'should change with a new source feed':  ensures that, when a new and different feed is loaded by the loadFeed function,  the content actually changes.

### Disclaimer
---
The project was build from a starter code from [Udacity, Inc.](https://www.udacity.com/).

"Nanodegree" is a registered trademark of Udacity. © 2011–2018 [Udacity, Inc.](https://www.udacity.com/)

Copyright (c) 2018 [Leonardo Daudinot](https://www.linkedin.com/in/leonardodaudinot/) and [Udacity, Inc](https://www.udacity.com/)

Released under the [MIT License](LICENSE.txt) and the [Terms of Service](https://help.github.com/articles/github-terms-of-service) of GitHub.