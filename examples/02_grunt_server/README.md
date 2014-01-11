# Grunt, Browserify, Express, Nodemon

Set up a more-involved example using Grunt. Whenever a file in the `client/` dir
changes, re-run Browserify. Use Express to serve the files at `localhost:3030`. Whenever a
server-side file changes (i.e., `index.js`), Nodemon restarts the server.

## Install `grunt-cli` globally

So we can use the commandline `grunt(1)` tool, install the Grunt commandline
runner globally using NPM:

    $ npm install -g grunt-cli

## Start the server

To start the Express server and start the watch tasks running, execute `grunt`:

    $ grunt

Then view the local webserver:

    $ open http://localhost:3030/
