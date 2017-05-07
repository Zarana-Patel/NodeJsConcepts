
/*Middleware : code which is sits between request and response.
  css,images sitting in server and how we can access those ..
  static files : like html, css, images. Using http request we can access these
  files from server...
 */
var express = require('express');
var app = express();


var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname+'/public'));

app.use('/',function(req,res,next){

    console.log('Request url:'+req.url);
    next(); // call/run the next Middleware

});

//Get is also Middleware
app.get('/',function(req,res){
  res.send('<html><head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head><body><h1>HIIIII</h1></body></html>');


});

app.get('/person/:id',function(req,res){
      res.send('<html><head></head><body><h1>Person:'+ req.params.id+'</h1></body></html>');


});


app.listen(port);
