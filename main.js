function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Number: ' + i);
}
doSomething();
//doIncrement will be compiled into valid JS code
function doIncrement() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Number: ' + i);
}
doIncrement();
var a;
var b;
var c;
var d;
var e = [1, 2, 3]; // Array 
var f = [1, true, 'a', false]; //type any gives all types of var
var ColorRed = 0;
var ColorGreen = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
var textMessage;
textMessage = 'abc';
var endsWithC = textMessage.endsWith('c');
//Arrow functions
var logger = function (message) {
    console.log(message);
};
//short version for small blocks of code
var doLog = function (message) { return console.log(message); };
//message is the parameter can be with or without parentheses
var doLogger = function (message) {
    console.log(message);
};
//inline annotation 
//Pascal naming convention for interfaces 
/*let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})

let drawPoint = (point: Point) => {
        // ...
    }
*/
//cohesion 
//Class 
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
