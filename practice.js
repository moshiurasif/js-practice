// let arr = [45, 22, 12, 64, 98];
// let sorting = arr.sort((a,b)=>a - b);
// console.log(arr);
// console.log(sorting);

// let arr = [
//     {name: "asif", year: 2015},
//     {name: "Akash", year: 2022},
//     {name: "Sagor", year: 2002}
// ];
// let year = arr.sort((a,b)=>a.year - b.year);
// console.log(arr);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(){return 0.5 - Math.random()});
// console.log(Math.random());
// console.log(points);

// const arr = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//     // console.log(Math.floor(Math.random() * (i+1)));
//   let j = Math.floor(Math.random() * (i+1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }
// console.log(points);
// let maxi = Math.max.apply(null, points);
// console.log(maxi);
// function myArrayMax(arr) {
//     let len = arr.length;
//     let max = -Infinity;
//     while (len--) {
//       if (arr[len] > max) {
//         max = arr[len];
//       }
//     }
//     return max;
//   }

//   console.log(myArrayMax(arr));
// arr.sort(function(a, b){
//     let x = a.name.toLowerCase();
//     let y = b.name.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
//   console.log(arr);

let arr = [4, 5, 6, 7, 8];
function hey(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
}
arr.forEach(hey);