/*
In JavaScript primitive parameters(Numbers,strings) are passed to a function by value like when you pass a number to a function. If the function changes the value of the parameter, this change is not reflected in the calling function.

If instead you pass an object as a non-primitive like an Array or a user-defined object as a parameter of a function, the object is passed as reference. If the function changes the object's properties, this change is reflected in the calling function. In reference - share the properties . so any object change anything in properties those change reflects the other object's propeties  
*/
/* Example of pass by Value */
var object = function(b){
    var b =2 ;
}
var a =1;
object(a);
console.log(a);
/* Example of pass by Reference */

function changeObj(d){
        d.property1 = function(){};
        d.property3 = {};
}
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);