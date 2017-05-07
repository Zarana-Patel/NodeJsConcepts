var person = {
    firstname:'',
    lastname:'',
    greet : function(){
        return this.firstname+ ' '+ this.lastname;
    }
}
var  john = Object.create(person);
john.firstname="john";
john.lastname="doe";
console.log(john.greet());
var  jane = Object.create(person);
jane.firstname="jane";
jane.lastname="doe";
console.log(jane.greet());