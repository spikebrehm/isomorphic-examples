var express = require('express')
  , app = express()
  , port = 3030
;

app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Express server listening on %s...', port);
