/* Buffer : A temporary holding spot for data being moved from  one place to another. (limited size)


Stream : A squence of data made available over time (pieces of data that eventually combine into a whole)
Process the  data which are coming from Buffer over time


Buffer stores  binary data .It globally avaible in JS.So need to use require to use buffer

*/

var buf = new Buffer('Hello','utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON()); 
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
