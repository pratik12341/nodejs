var fs = require('fs');

/*
//This is sync version of reading and writing file
var readtext = fs.readFileSync('readme.txt','utf8');
console.log(readtext);
fs.writeFileSync('writeme.txt',readtext);
*/

var readtext = fs.readFile('readme.txt','utf8',function(err,data){
  fs.writeFile('writeme.txt',data);
});
