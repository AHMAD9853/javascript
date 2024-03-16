// Non Primitive Datatypes
//Non-primitive (reference) data type

// Array

let Car = ["BMW", "Honda", "Mercedes", "Toyota"]; 
// Datatypes = Array
//represents group of similar values
console.log(typeof Car); 
// Return = Object
console.log(Car);


// object
// it can created by 3 ways
// 1. by object literals

const classroom = {   
    name: "Ahmad",
    rollno: 12,
}
// Datatypes = Object
//represents instance through which we can access members
console.log(classroom.name);
console.log(classroom.rollno);
console.log(typeof classroom); 
// Return = Object

// 2. Using new keyword

 const myObj = new Object();
  education ="Engineer";
  age = 24;
  job ="engineer";
  vechile =2;
  home =2;
  
  console.log(myObj);

  // 3. Using construtor

  function city(name,population, isMetro) {
    this.name=name;
    this.population=population;
    this.isMetro=isMetro;
    
  }
  e=new city('Mumbai','10','yes')
  console.log(e);