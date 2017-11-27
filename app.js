var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
  console.log('Request was made to : ' + req.url);
  res.writeHead('200',{'Content-Type':'text/plain'});
  var myReadStream = fs.createReadStream(__dirname +'/readme.txt');
  myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log("server started listening on port 3000");
