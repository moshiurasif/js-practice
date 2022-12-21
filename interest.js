var calculateInterest = function (total, years, ratePercent, roundToPlaces) {
    var interestRate = ((ratePercent/100) + 1);
    return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
}
var money = 915;
var year = 13;
var rate = 2;
var placesToFixed = 2;
var answer = calculateInterest(money, year, rate, placesToFixed);
console.log(answer);