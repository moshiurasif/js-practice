// akta lok akta jungle er govire duklo, first 10 kilo meter er proti kilo meter a 10 ta kore animal dekhe, se jodi 10 kilo govire jay se 100ta animal dekhbe. erpor 10 theke 20 kilometer er vitor protikilote dekhbe 50ta kore animals. 20er por proti kilo te dekhbe 100ta kore animals.

let animalCount = 15;
const animalCounting = (animalCount) =>{
    let firstAnimalShow = 10;
    let secondAnimalShow = 50;
    if (animalCount <= 10) {
        
        return firstAnimalShow * animalCount;   
    }else if(animalCount <= 20){
        let firstTotalAnimal = 10 * animalCount;
        let restAnimal = animalCount - firstTotalAnimal;
        return firstTotalAnimal + restAnimal;
    }
}
const animalQuantity = animalCounting(animalCount);
console.log(animalQuantity);