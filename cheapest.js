const phones = [
    {name: "Samsung", price: 15000},
    {name: "Oppo", price: 12000},
    {name: "Realme", price: 10000},
    {name: "Huwei", price: 17000},
];

const cheapestPrice = (phones) =>{
    let cheapest = phones[0];
    for (const phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
        
    }
    return cheapest;
}
const cheapest = cheapestPrice(phones);
console.log(cheapest);