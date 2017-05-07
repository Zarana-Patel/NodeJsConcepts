var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greettxt.txt', 'utf8');

console.log(greet);


/*
Error -first callback : callbacks take  an error object as their first parameter : it is standard pattern in Nodejs , null if no error otherwise will contain an object defining error
*/
var greet2 = fs.readFile(__dirname + '/greettxt.txt', 'utf8',function(err,data){ 
    console.log(data);
    
});

console.log('Done!!');