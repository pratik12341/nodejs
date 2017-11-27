var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');

myReadStream.on('data',function(chunk){
  console.log("Reading new chunk of data");
  console.log(chunk);
})
