// Primitive datatypes

const uin = 21233 // Datatype = number.
// represents numeric values
console.log(typeof uin);

const name = "Ahmad" // Datatype = string
// represents sequence of characters
console.log(typeof name);

let marks; // Datatype = undefined " just declared not assigned any values"
// represents undefined value
console.log(typeof marks);

let signedIn = false // Datatype = boolean  // boolean = true/false
//represents boolean value either false or true
console.log(typeof signedIn);

let balance = BigInt(214558458159894989656); //Datatype = BigInt
console.log(balance);
console.log(typeof balance);

let section = null // Datatype = Null 
// represents null i.e. no value at all
console.log(typeof section); // return = Object


let sym = Symbol(["hello"]) // Datatype = symbol // it is used for unique value
console.log(sym);
console.log(typeof sym);