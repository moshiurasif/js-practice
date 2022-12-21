const names = ["Asif", "Mahim", "Asif", "jalal", "jalal", "Mahim"];

const removeDuplicate = (names) =>{
    const unique = [];
    for (const name of names) {
        if (unique.indexOf(name) == -1) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);