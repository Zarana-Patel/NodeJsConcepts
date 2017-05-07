// Pattern3 : Here we are creating Person contructor object , and replacing the export empty object

function Person(){
    this.title = "Hello world";
    this.greet = function(){
        console.log(this.title);
    }
}
module.exports = new Person(); // it replace the exports empty object with Person constructor object...And this one runs only once. results will store in cache...