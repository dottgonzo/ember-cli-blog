# Myapp

This README outlines the details of collaborating on this Ember application.

## Working example

[http://exmer.com/bloggrcouch/](http://exmer.com/bloggrcouch/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone` this repository
* `cd ember-cli-blog`
* `npm install`
* `bower install`
* install couchDB from http://couchdb.apache.org/
* `npm install -g add-cors-to-couchdb`
* `add-cors-to-couchdb`
* update `config/environment.js` `local_couch` and `remote_couch` to your CouchDB
  instance name.
* update `config/environment.js` `ENV.baseURL` in the production environment

## Running

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

