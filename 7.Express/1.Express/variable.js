
/*Here we use varible and how we can access the variable using res.send */
var express = require('express');
var app = express();


var port = process.env.PORT || 3000;

app.get('/',function(req,res){
  res.send('hhhiiiii');


});

app.get('/person/:id',function(req,res){
      res.send('<html><head></herad><body><h1>Person:'+ req.params.id+'</h1></body></html>');


});


app.listen(port);
