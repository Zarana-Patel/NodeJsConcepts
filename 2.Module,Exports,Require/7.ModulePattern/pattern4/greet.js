// Pattern4 : Here we are creating Person contructor object 

function Person(){
    this.title = "Hello world";
    this.greet = function(){
        console.log(this.title);
    }
}
module.exports = Person; // it replace the exports empty object with Person function constructor itself...