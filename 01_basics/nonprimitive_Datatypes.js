// Non Primitive Datatypes
//Non-primitive (reference) data type

// Array
// It can be created by three ways
// 1. By array literal

let Car = ["BMW", "Honda", "Mercedes", "Toyota"]; 
// Datatypes = Array
//represents group of similar values
// console.log(typeof Car); 
// Return = Object
// console.log(Car);

// 2. Using new Keyword
  let dept = new Array();
  dept[0] = "Electrical Engineering";
  dept[1] ="Civil Engineering",
  dept[2]= "Electronics Engineering";
  dept[3]="Computer Engineering";
   
   for (i =0;i < dept.length;i++) {
    // console.log(dept[i]);
    
   }
// 3. Using Constructor
const emp = new Array("Ahmad","Sohel","vijay");
for (let i = 0; i < emp.length; i++) {
  // console.log(emp[i]);
  
}
//  Array Methods

// concat method
let a=["a","b","c"]
let A=["A","B","C"]
// console.log(a);
// console.log(A);
const c=A.concat(a)
// console.log(c);
// console.log(a.concat(A));

// object
// it can created by 3 ways
// 1. by object literals

const classroom = {   
    name: "Ahmad",
    rollno: 12,
}
// Datatypes = Object
//represents instance through which we can access members
// console.log(classroom.name);
// console.log(classroom.rollno);
// console.log(typeof classroom); 
// Return = Object

// 2. Using new keyword

 const myObj = new Object();
  education ="Engineer";
  age = 24;
  job ="engineer";
  vechile =2;
  home =2;
  
  // console.log(myObj);

  // 3. Using construtor

  function city(name,population, isMetro) {
    this.name=name;
    this.population=population;
    this.isMetro=isMetro;
    
  }
  e=new city('Mumbai','10','yes')
  // console.log(e);