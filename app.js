var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log("Request was made to : " + req.url);
  if(req.url === '/' || req.url =='/home'){
    var myReadStream = fs.createReadStream(__dirname + '/index.html');
    myReadStream.pipe(res);
  }else if (req.url === '/contactus'){
    var myReadStream = fs.createReadStream(__dirname + '/contact.html');
    myReadStream.pipe(res);
  }
  else if(req.url === '/profile'){
    obj = [{name:'test',country:'test2',phone:'123345'},{name:'test4',country:'test3',phone:'123347'}];
    res.end(JSON.stringify(obj));
  }else{
    var myReadStream = fs.createReadStream(__dirname + '/404.html');
    myReadStream.pipe(res);
  }
});

server.listen(3000,'127.0.0.1');
console.log("server started on port 3000");
