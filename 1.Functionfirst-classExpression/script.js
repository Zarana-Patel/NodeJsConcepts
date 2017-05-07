/* Function are first-class  : Meaning you can pass function as argument to another function */

function greet(){
    console.log("Hi");

}
greet();

function loggreet(fn) {
    fn();
}
loggreet(greet);
/* Function Expression */
var hi = function(){
    console.log("Hi Z");
} 
hi();
/* Use Function Expression on fly */
loggreet(function(){
    console.log("Hi Zarana");
});
