var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.send("this is homepage");
});

app.get('/contact-us',function(req,res){
  res.send("this is contact us page");
});

app.get('/profile/:id',function(req,res){
  res.send("You have requested for the profile of " + req.params.id);
});
app.listen(3000);
