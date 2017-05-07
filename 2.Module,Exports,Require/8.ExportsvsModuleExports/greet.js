/*
Points to remeber :
1) module.exports and exports both points to same empty object
2) when we replace the exports to value or to function then module.exports and exports both points to different objects (meaning 
in below situation : exports replaced with function object) So, exports is now points to function oject but module.exports still points to empty object.
3) require is always expose the module.exports
4) In any situation like we would like to point both module.exports and exports to same empty object .we need to mutated(to change) the exports empty object.

In below case use exports.greet = function instead of exports = function (Change the exports instead of replace )
*/


exports = function(){
    console.log('hello');
}
console.log(exports);
console.log(module.exports); 