//In Es6 is inportant to write use strict
'use strict';
class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet()
    {
        console.log(this.firstname + this.lastname);
    }
}
var john = new Person('zarana','patel');
john.greet();

/*
Traditional ES5 and above use below method which works exactly the same way as above. ES6 just introduce the clean way to define function constructor 
function Person(fistname,lastname){

        this.firstname = firstname;
        this.lastname = lastname;
    }
   Person.prototype.greet = function()
    {
        console.log(this.firstname + this.lastname);
    }

var john = new Person('zarana','patel');
john.greet();


*/