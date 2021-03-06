/*Template: express has ability to plug the template engine
Template engines are used where server is responsible for finalizing
( putting runtime/dynamic value in html ) the HTML.


 */
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname+'/public'));


app.set('view engine','ejs');


app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/',function(req,res){
   res.render('test');



});

app.get('/person/:id',function(req,res){

  res.render('template',{ID:req.params.id});

});




app.listen(port);
