/*Routing : Mapping HTTP request to the content.

whether actual file exists into server or may be into database

someone request for the content on some url - then server take a look into that
request and based on mapping it send content back to client (content may be
coming from server or database , end user do not have to worry about where is it
coming from
)
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
