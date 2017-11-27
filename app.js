var http = require('http');

var server = http.createServer(function(req,res){
  res.writeHead('200',{'Content-Type':'text/json'});
  var obj = {
    name:'test',
    country:'test1',
    phone:'123456788'
  }
  res.end(JSON.stringify(obj));
});

server.listen(3000,'127.0.0.1');
console.log("server started on port 3000");
