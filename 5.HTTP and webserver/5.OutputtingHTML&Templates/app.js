//template: text designed to be the basis for final text or ocntent after being processed

var http = require('http');
var fs = require('fs');
var server =http.createServer(function(req, res){
   res.writeHead(200, { 'Content-Type':'text/html'});
    var html = fs.readFileSync(__dirname+'/index.html','utf8');
    var message = "Hello world....";
    html = html.replace('{Message}', message);
    res.end(html);
    
});
server.listen(1337, "127.0.0.1",function(){
    console.log('Ok,Server is listerning!!');
});