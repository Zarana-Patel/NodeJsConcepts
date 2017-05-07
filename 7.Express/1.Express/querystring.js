/*
QueryString : GET/?id=4 &page=3



POST data: once fill up the form and click on submit button ,
browser perform the post and the content type : application/x-www-form-urlencoded.
QUery string moves into the body of HTTP so, it is no longer available into URL.

POST JSON data  formate:

Host: localhost
content-Type: application/JSON
{
"username":'zarana',
"password":'patel'
}
*/


var express = require('express');
var app = express();

var port = process.env.PORT ||3000;


app.use('/assets',express.static(__dirname+'/public'));

app.set('view engine','ejs');

app.use('/',function(req,res,next){
    console.log('Request Url:' + req.url);
    next();
});

app.get('/',function(req,res){
  res.render('test');

});

app.get('/person/:id',function(req,res){
  res.render('query',{ID:req.params.id,Qstr: req.query.qstr});
});

app.listen(port);
