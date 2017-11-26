//Loop through the code after specific time interval
var time = 0;
var timer = setInterval(function(){
  time += 2;
  console.log(time +  " have passed");
  if (time > 5){
    clearInterval(timer);
  }
},2000);
