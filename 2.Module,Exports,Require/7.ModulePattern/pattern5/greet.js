// Pattern5(Most popular pattern in JS) :Pattern called revealing module : exposing only properties and methods you want via a returned object (Its very common and clean way to structure and project the code within module)

var greeting = "Hello world";
function greet(){
    console.log(greeting);
}
module.exports = {
    greet: greet     // here we are exposing greet method which have access the greeting variable  but we do not have direct access of variable outside the module
}