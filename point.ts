export class Point {

    

    // Question makes it optional 
    //cleaner way to initialize use a constructor
    constructor(private _x?: number, private _y?: number){
       
    }
    
    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    // Method or Function
    getDistance(another: Point){
        //..
    }
    // Property
    get x(){
        return this._x;
    }
    
    set x(value){
        if(value < 0)
            throw new Error('value cannot be less than 0');
        
        this._x = value;
    }
}