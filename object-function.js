// let point = {x: 0, y:0};
// let p2 = {p:point.x, q:point.y+1};
// console.log(p2.p);

/*let book = {
    "main title": "JavaScript", // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences", // for is reserved, but no quotes.
    author: { // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan"
    }
   };
console.log(book.author.firstname +" "+ book.author.surname ); */

// let o = new Object();
// let arr = new Array();
// let day = new Date();
// let map = new Map();
// console.log(o);
// console.log(arr);
// console.log(day);
// console.log(map);
// let o1 = Object.create({x:1, y:4});
// console.log(o1.x);
// function distance(x1, y1, x2, y2) {
//     let dx = x2 - x1;
//     let dy = y2 - y1;
//     return Math.sqrt(dx*dx + dy*dy);
//    }
//    console.log(distance(5,4,8,7));
//    console.log(Math.sqrt(18));
// "use strict";
// function factorial(x) {
//     if (x <= 1) return 1;
//     return x * factorial(x-1)//4*3*2*1
//    }
// console.log(factorial(4));

// const f = function fact(x) { if (x <= 1) return 1; else return x*fact(x-1); };
// console.log(f(5));

// const fa = function facto(y){
//     if(x<=1) return 1; 
//     else return x*fact(x-1);
// };
// console.log([3,5,2,6, 1, 111].sort(function(a,b){return a-b}));
// console.log([3,7,21,368,43,1,200,100].sort((a,b)=>a-b));


// let tensquared = (function(x) {return x*x;}(10));
   // console.log(function(x){return x*x}(10));
   // console.log(tensquared);

   // return a object through arrow function
   //let x = () => ({a:2,b:3});// jodi object return kori tahole obosshoi parenthesis er vitor object ta rakhte hobe karon object er curly braces function block er curly braces er sathe complict kore error dibe.
   // console.log(x());

   // let filtered = [1,null,2,3].filter(x=>x!==null);
   // console.log(filtered);
   // let square = [2, 3, 5, 6].map(x => x*2);
   // console.log(square);
   // function hypotenuse(a, b) {
   //    function square(x) { return x*x; }
   //    return Math.sqrt(square(a) + square(b));
   //   }
   //   console.log(hypotenuse(2,3));
   function getPropertyNames(o, a) {
      if (a === undefined) a = []; // If undefined, use a new array
      for(let property in o) a.push(property);
      return a;
     }
     // getPropertyNames() can be invoked with one or two arguments:
     let o = {x: 1}, p = {y: 2, z: 3}; // Two objects for testing
     let a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
     console.log(getPropertyNames(p, a)); // a == ["x","y","z"]; add p's properties to it