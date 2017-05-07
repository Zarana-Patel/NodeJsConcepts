/*
NPM: Node package manager
npm -v - check the version number of NPM

NPM registery : is available for everyone, we can put packages into it.
  It has tones of packages...
  It has popular package called express

  init :

  package.json :

  nodemon

*/
 var http = require('http');
 var fs = require('fs');


 http.createServer(function(req,res){
   if(req.url ==='/')
   {
     res.writeHead(200,{'content-type':'text/html'});
     fs.createReadStream(__dirname+'/index.html').pipe(res);
   }
   else if (req.url ==='/api'){
   res.writeHead(200,{'content-type':'application/json'});
   var obj ={
     firstname : 'john',
     lastname:'doe'
   };
   res.end(JSON.stringify(obj));
}
  else{
  res.writeHead(404);
  res.end();
}
 }).listen(1337,'127.0.0.1');
