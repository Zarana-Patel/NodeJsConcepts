/*


*/

var buffer = new ArrayBuffer(8);  // 8 bytes  = 64 bits  // 1 byte = 8 bits (00010101)
var view = new Int32Array(buffer); 
view[0] =5;
view [1]=15;
console.log(view);