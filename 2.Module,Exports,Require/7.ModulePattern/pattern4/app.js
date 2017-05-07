/*
    /* It is actually calls the entire Person constructor object , 
   Think about like this:
   
   require('function Person(){
    this.title = "Hello world";
    this.greet = function(){
        console.log(this.title);
    }
})

*/

var greet3 = require('./greet'); // here we have entire person contructor object
var grtr = new greet3();  //creating new Person contructor object by ourself
grtr.greet();
grtr.title="Casfasdasdsadas";
grtr.greet();

var greet4 = require('./greet'); // here we have entire person contructor object
var grtr1 = new greet4();  // //creating new Person contructor object by ourself
grtr1.greet();
grtr1.title="Changed;";
grtr1.greet();

//In this case grtr and grtr1 both are Person contructor object instances but both are not same object - It just like Person has 2 instances - grtr1 and grtr