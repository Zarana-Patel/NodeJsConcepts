/*
HTTP: a set of rules (format) for data being transferred on the web.


HTTP parser : it exracts the following information from HTTP

Header fields and values
Content-Length
Request method
Response status code
Transfer-Encoding
HTTP version
Request URL
Message body

*/

var http = require('http');
http.createServer(function(req, res){
   res.writeHead(200, { 'Content-Type':'text/plain'});
    res.end('Hello World!!\n');
    
}).listen(1337, "127.0.0.1",function(){
    console.log('Ok,Server is listerning!!');
});