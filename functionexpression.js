var callFunction = function(funname){
  funname();
};

var hello = function(){
  console.log("hello");
};

var bye = function(){
  console.log("This is function bye");
};

function write(){
  console.log("this is write function");
}

hello();
callFunction(bye);
write();
