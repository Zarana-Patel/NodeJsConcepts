/* 1) Modules 2) Export 3) require
Modules : Modules are reusable block of code whose existence does not impact on other code.
Created 2 files greet.js and app.js .In greet.js  - Write a function .To invoke that module into app.js used require
Can not call greet() from app.js because Modules are self contain .
To do that - added module.exports = greet . And set require('./greet') to variable greet (Function expression/Fucntion first class) and call that greet . So now, I can invoke module function in app.js
*/
var greeting = require('./greet');   
greeting.SayHello();
greeting.greet();
