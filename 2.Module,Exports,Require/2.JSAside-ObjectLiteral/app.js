//Object : In simple language  - Collection of name/value pairs
//Object Literal :  name/value pairs which are separated by comma and in define under the curly braces

var person ={
    firstname : 'zarana',
    lastname: 'patel',
    greet : function(){
        console.log("Firstname:" + ''+this.firstname+' '+'Lastname:'+this.lastname);
    } 
};
person.greet();
console.log(person.firstname);