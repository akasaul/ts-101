// type annotation for numbers 

let apples: number = 5;

// let apples = 5; => type inference same as above

// apples = 'hi'  - throw error

let speed: string =  'speedoffast';

// speed = boolean 

let hasName: boolean = true;

// value identical to its type 
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects 
let now: Date = new Date();


// Array 
let colors: string[] = ['red', 'green', 'blue']; //colors array with string 

let numbers: number[] = [1, 3, 5]; //Numbers array

let truths: boolean[] = [true, true, false];

// numbers.push('slim'); - error


// Classes 

class Car {

}

// Car as a type 
let car: Car = new Car();


// Object literal  { prop: Type; }
let point: {  
  x: number;
  y: number
} = {
  x: 10, 
  y: 20
}


// Function
const logNumber: ( i: number ) => void = ( i: number ) => {
  console.log(i);
}



