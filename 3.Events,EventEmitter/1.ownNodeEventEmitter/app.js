var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on ('greet',function(){
    console.log('hello world');
});

emtr.on('greet',function(){
    console.log('hello Zarana');
});
console.log('HIIII');
emtr.emit('greet');