var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data',function(chunk){
  myWriteStream.write(chunk);
})
