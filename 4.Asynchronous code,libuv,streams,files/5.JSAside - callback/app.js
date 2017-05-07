function greet(callback){
    console.log('hello');
    callback();
    var data = {
       name: 'John doe' 
    };
    callback(data);
    
}
greet(function(){
    console.log('this is called back1');
    
});
greet(function(data){
    console.log('this is called back2');
    console.log(data.name);
});