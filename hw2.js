// const isEven = function(x){
//     for (let i = 1; i <= x; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
            
//         }    
//     }
// }
// const evenNumber = isEven(100);
// console.log(evenNumber);

function getEvenNumbers(num) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

var arr = [1, 2, 3, 4, 5, 6];
arr.forEach(getEvenNumbers);
