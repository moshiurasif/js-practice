const greet = "Hello how are you";
const reverseStr = greet =>{
    let reverse = "";
for (const str of greet) {
    reverse = str + reverse;//olleH
}
return reverse;
}
const reverseElement = reverseStr(greet);
console.log(reverseElement);