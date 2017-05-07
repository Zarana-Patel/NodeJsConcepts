/*
Pipe: connecting two streams by writing to one stream what is being read from another  
Note: delete the greetcopy.txt.gz and create it empty file and clean the data from greetcopy.txt before run app.js file
*/

var fs = require('fs');
var zlib = require('zlib');  //compress the file 

var readable = fs.createReadStream(__dirname + '/greettxt.txt');


var writable = fs.createWriteStream(__dirname+'/greetcopy.txt');
//readable.pipe(writable); // pipe connecting readable and writable stream (and it has destination is writable and return is also writable)

var compressed = fs.createWriteStream(__dirname+'/greetcopy.txt.gz');
var gzip = zlib.createGzip(); //  

readable.pipe(writable);

  //method chaining . A method returns an object so we can keep calling more methods , in this case readable stream then it pipe to gzip and the gzip again pipe to compressed stream.

readable.pipe(gzip).pipe(compressed);