// Type Annotation Examples

const apple: number = 5;

// throws error
// const apple1 : number=false;

let apple2 :number=5;
// throws error
// apple2='hello'

let speed:string='speed'
// throws error
// let speed:string=10

let nothingMuch: null= null;

let nothingMuchUndefined: undefined= undefined;


// examples of built in objects
 let now : Date = new Date()


// example of array
// throws error
// let myStringNames : number[]=['sukesh','chanda']

let myStringNames : string[]=['sukesh','chanda']


// example of Classes
class Car{

}

const car: Car = new Car()

// example for object literal
let point :{x:number;y:number}={
    // throws error
    // x:'sukes',
    // y:false

    x:10,
    y:20
}


// example of Annotation around function
let i=10;
let TodoFunction : (i:number)=>void = (i:number)=>{
    console.log(i)
}
