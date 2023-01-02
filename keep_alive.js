var http = require('http');

http.createServer(function (req, res) {
  res.write("Execution Okay");
  res.end();
}).listen(8080);