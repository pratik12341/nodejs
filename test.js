var adder = function(a,b){
  return `result is ${a+b}`;
};

var counter = function(arr){
  return arr.length;
};

var pi = 3.14;

module.exports.counter = counter ;
module.exports.adder = adder ;
module.exports.pi = pi ;

 /*Another method
module.exports = {
  counter:counter,
  adder:adder,
  pi: pi
}
*/
