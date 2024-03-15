// Primitive datatypes

const uin = 21233 // Datatype = number.
console.log(typeof uin);

const name = "Ahmad" // Datatype = string
console.log(typeof name);

let marks; // Datatype = undefined " just declared not assigned any values"
console.log(typeof marks);

let signedIn = false // Datatype = boolean  // boolean = true/false
console.log(typeof signedIn);

let balance = BigInt(214558458159894989656); //Datatype = BigInt
console.log(balance);
console.log(typeof balance);

let section = null // Datatype = Null but it will show as an object
console.log(typeof section);


let sym = Symbol(["hello"]) // Datatype = symbol // it is used for unique value
console.log(sym);
console.log(typeof sym);