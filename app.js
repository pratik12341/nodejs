var http = require('http');

var server = http.createServer(function(req,res){
  console.log("request was made to : " + req.url);
  res.writeHead('200',{'Content-Type':'text/plain'});
  res.end("This is sample server");
});

server.listen(3000,'127.0.0.1');
console.log("server started on port 3000");
