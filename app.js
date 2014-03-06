var http = require('http')
  , fs = require('fs')
  , static = require('node-static');

var file = new static.Server('./public');

http.createServer(function (req, res) {
  req.addListener('end', function () {
    file.serve(req, res);
  }).resume();
}).listen(5555);
