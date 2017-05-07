var Emitter = require('events');
var eventconfig = require('./config').events;
var emtr = new Emitter();

emtr.on (eventconfig.GREET,function(){
    console.log('hello world');
});

emtr.on(eventconfig.GREET,function(){
    console.log('hello Zarana');
});
console.log('HIIII');
emtr.emit(eventconfig.GREET);