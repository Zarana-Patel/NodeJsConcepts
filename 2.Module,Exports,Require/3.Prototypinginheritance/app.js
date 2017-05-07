/*Functional Contructor : Is a normal function which is another way to create the object.

Prototype Chain : Every object in Javascript has a prototype property. When a messages reaches an object, JavaScript will attempt to find a property in that object first, if it cannot find it then the message will be sent to the object’s prototype and so on. This works just like single parent inheritance in a class based language. And In Javascript is called Prototype Chaining.
The __proto__object understand prototype chains in JavaScript there is nothing as simple as the __proto__ property. Unfortunately __proto__ is not part of the standard interface of JavaScript, not at least until ES6. So you shouldn’t use it in production code. But anyway it makes explaining prototypes easy.
*/
function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.greet = function(){
    console.log("Firstname" + this.firstname + 'Lastname:' + this.lastname);
}
var p1 = new Person('Zarana','Patel');
var p2 = new Person('ABC','Patel');
p1.greet();
console.log(p1.__proto__);
console.log(p1.__proto__ === p2.__proto__);