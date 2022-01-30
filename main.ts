function log(message){
    console.log(message);
}

var message = 'Hello World';

log(message);

function doSomething(){
    for(var i = 0; i<5; i++){
        console.log(i)
    }
    console.log('Number: ' + i)
}

doSomething();

//doIncrement will be compiled into valid JS code
function doIncrement(){
    for(let i = 0; i<5; i++){
        console.log(i)
    }
    console.log('Number: ' + i)
}

doIncrement();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3]; // Array 
let f: any[] = [1, true, 'a', false]; //type any gives all types of var

const ColorRed = 0;
const ColorGreen = 1;

enum Color {Red = 0, Green = 1, Blue = 2}

let backgroundColor = Color.Blue;

let textMessage;
textMessage = 'abc';
let endsWithC = (<string>textMessage).endsWith('c')

//Arrow functions
let logger = function(message){
    console.log(message);
}

//short version for small blocks of code
let doLog = (message) => console.log(message);

//message is the parameter can be with or without parentheses
let doLogger = (message) => {
    console.log(message)
}

//interfaces 
interface Point {
    x: number,
    y: number,
}
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

import {Point} from './point';

let point: Point = new Point(1, 2);
let x = point.x;
point.x  = 10;
point.draw();

 