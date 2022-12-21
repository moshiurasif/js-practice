/*let primes = [5, 9, 6, 4];
// console.log(primes.length);
primes[primes.length] = 10;
console.log(primes.length);
primes[primes.length] = 90;
console.log(primes.length);
console.log(primes);*/


// let primes = [];
// primes.push(9);
// primes.push(8);
// primes[primes.length] = 78;
// console.log(primes);
// console.log(primes.length - 1);
// console.log(primes.length);
// let points = [ // An array with 2 elements.
//  {x: 0, y: 0}, // Each element is an object.
//  {x: 1, y: 1}
// ];
// console.log(points[1].y);
// console.log(points[0]['y']);

// let data =  {
//     trial1: [[1,2], [3,4]], 
//     trial2: [[1,2], [3,4]]
// }
// console.log(data["trial1"][0][1]);

// let a = [];
// a.push(1,2,3, 4, 5, 6);
// a.reverse();
// console.log(a);
// console.log(Math.sqrt(9));

function eArabic(x){
    return x.toLocaleString('ar-EG');
  }
  
  console.log(eArabic(123456.789));
  // expected output: "١٢٣٬٤٥٦٫٧٨٩"
  
  console.log(eArabic('123456.789'));
  // expected output: "123456.789"
  
  console.log(eArabic(NaN));
  // expected output: "ليس رقم"