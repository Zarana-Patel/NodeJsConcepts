/*
    /* It is actually calls the entire Person constructor object , 
   Think about like this:
   
   require('.function Person(){
    this.title = "Hello world";
    this.greet = function(){
        console.log(this.title);
    }
})

*/
var greet2 = require('./greet'); // we are getting export object's property and  method 
greet2.greet();

//Change the property and call require again and see what happen
greet2.title = "Change the title ";

/*  rule : object is always called by reference meaning : here when we called require first time : it store person object info into cache and when we called it again it points to same object, If anything change into object , it will reflect to greet3 as well bcoz greet2 and gree3 points to the same Person object*/
var greet3 = require('./greet'); // we are getting export object's property and  method 
greet3.greet();