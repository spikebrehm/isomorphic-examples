# Grunt + Browserify

Show how to use Grunt to run Browserify.

## Install `grunt-cli` globally

So we can use the commandline `grunt(1)` tool, install the Grunt commandline
runner globally using NPM:

    $ npm install -g grunt-cli

## Create a bundle

To bundle up your CommonJS module into a single file, just run `grunt`:

    $ grunt

Then view the `index.html` page:

    $ open index.html
