'use strict';
//ES6 introduce class and templateliterals 
var EventEmitter = require('events');
var Greetr = require('./greeter')


var greeter1 = new Greetr();
greeter1.on('greet',function(data){
    console.log("Someone greeted" +data);
});
greeter1.greet('Zarana');



/*
ES5 and above version without class
function Greetr(){
    EventEmitter.call(this); // inherits the Event emitter's own properties - constructor stealing pattern
    this.greeting = "Hello World!!";
}
Util.inherits(Greetr,EventEmitter);
Greetr.prototype.greet = function(data){
        console.log(this.greeting+':'+data);
        this.emit('greet',data);
    
};

var greeter1 = new Greetr();
greeter1.on('greet',function(data){
    console.log("Someone greeted" +data);
});
greeter1.greet('Zarana);
*/