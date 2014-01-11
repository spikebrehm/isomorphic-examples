# Browserify

Simple example showing how to use browserify to create a bundle.

## Install Browserify globally

So we can use the commandline `browserify(1)` tool, install Browserify
globally using NPM:

    $ npm install -g browserify

## Create a bundle

To bundle up your CommonJS module into a single file, use the commandline tool:

    $ browserify index.js -o bundle.js

Then view the `index.html` page:

    $ open index.html

You can also enable source maps for easier debugging in the browser. Just add
the `--debug` flag:

    $ browserify index.js -o bundle.js --debug
