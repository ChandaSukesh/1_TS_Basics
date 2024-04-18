// Type Annotation Examples
var apple = 5;
// throws error
// const apple1 : number=false;
var apple2 = 5;
// throws error
// apple2='hello'
var speed = 'speed';
// throws error
// let speed:string=10
var nothingMuch = null;
var nothingMuchUndefined = undefined;
// examples of built in objects
var now = new Date();
// example of array
// throws error
// let myStringNames : number[]=['sukesh','chanda']
var myStringNames = ['sukesh', 'chanda'];
// example of Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// example for object literal
var point = {
    // throws error
    // x:'sukes',
    // y:false
    x: 10,
    y: 20
};
// example of Annotation around function
var i = 10;
var TodoFunction = function (i) {
    console.log(i);
};
