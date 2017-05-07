/*API : Application programming interface , APi is set of urls which can accept
  or send the data using http and tcp/ip
Endpoint : one url in a web api ...

Serializer : translating an object into a format that can be stored or transferred.
JSON,CSV,XML and other are popular.
deserializer is opposite : translating JSON ,CSV or xml into object
 */


 var http = require('http');
 var fs = require('fs');


 http.createServer(function(req,res){
   res.writeHead(200,{'content-type':'application/json'});
   var obj ={
     firstname : 'john',
     lastname:'doe'
   };
  res.end(JSON.stringify(obj));

 }).listen(1337,'127.0.0.1');
