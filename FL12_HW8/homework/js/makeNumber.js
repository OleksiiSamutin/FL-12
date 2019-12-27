function makeNumber(string) {
    let numberString = "";
    for (let i = 0; string.length; i++) {
        if (string[i] >= '0' && string[i] <= '9') {
            numberString += string[i]
        }

    }
    return numberString;
}

console.log(makeNumber('erer384jjjfd123'))
console.log(makeNumber('123098h76gfdd')); //=>12309876
console.log(makeNumber('ijifjgdj'));
