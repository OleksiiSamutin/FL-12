function makeNumber(string) {
    let numberString = "";
    for (let i = 0; string.length; i++) {
        if (string[i] >= '0' && string[i] <= '9') {
            numberString += string[i]
        }

    }
    return numberString;
}
function countNumbers(string){
    let stringOfNumbers = makeNumber(string)
    let resultObject = {}
    let number;
    let count = 0;
    for (let i = 0; i < stringOfNumbers.length; i++){
        number = stringOfNumbers[i]
        if (resultObject[number] === undefined ){
            for (let j = 0; j < stringOfNumbers.length; j++){
                if (number === stringOfNumbers[j]){
                    count++
                }
            }
            resultObject[number] = count
        }
        count = 0;
    }
    return resultObject;
}

countNumbers('erer384jj4444666888jfd123');
// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
countNumbers('jdjjka000466588kkkfs662555');
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
countNumbers(''); // => {}
