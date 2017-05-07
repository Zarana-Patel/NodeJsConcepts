var obj = {
    name:'Hello Zarana',
    greet: function(){
    console.log(`Hello ${this.name}`);
}
}
obj.greet();
obj.greet.call({name:'abhishek'});
obj.greet.apply({name:'abhishek'}); // apply uses array instead 