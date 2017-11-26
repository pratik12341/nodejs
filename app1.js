var fs = require('fs');

//To Delete the file
//fs.unlink('writemw.txt');

//To create the folder
//fs.mkdir('LOL');

//To delete the folder
//fs.rmdir('LOL');

fs.mkdir('stuff',function(){
  fs.readFile('readme.txt','utf8',function(err,data){
    fs.writeFile('./stuff/writeme.txt',data);
  })
})
