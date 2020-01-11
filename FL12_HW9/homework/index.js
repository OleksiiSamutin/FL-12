// function convert(...args) {
//     return args.map(function (currentElem) {
//         if (typeof currentElem === 'number') {
//             return String(currentElem);
//         } else {
//             return Number.parseInt(currentElem);
//         }
//     });
// }

// function convert(...args) {
//     return args.map(function (currentElem) {
//         return typeof currentElem === 'number' ? String(currentElem) : Number.parseInt(currentElem)
//     });
// }
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];

const date = new Date(2019, 0, 2);

function convert(...args) {
    let result = [];
    for (let i = 0; i < args.length; i++) {
        result.push(typeof args[i] === 'number' ? String(args[i]) : Number.parseInt(args[i]));
    }
    return result;
}

function executeforEach(array, funct) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = funct(array[i]);
    }
    return result;

}

function mapArray(array, funct) {
    let tempArr = [...array];
    for (let i = 0; i < tempArr.length; i++) {

        if (typeof tempArr[i] === 'string') {
            tempArr[i] = Number.parseInt(tempArr[i])
        }
    }

    return executeforEach(tempArr, funct);
}

function flipOver(string) {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i]
    }
    return result;
}

function filterArray(array, funct) {
    let result = [];
    let filterArray = executeforEach(array, funct);
    for (let i = 0; i < filterArray.length; i++) {
        if (filterArray[i]) {
            result.push(array[i]);
        }
    }
    return result;
}

function makeListFromRange(range) {
    let result = [];
    for (let i = range[0]; i <= range[1]; i++) {
        result.push(i);
    }
    return result;
}

function getArrayOfKeys(arrayOfObjects, key){
    return executeforEach(arrayOfObjects, (obj) => obj[key]);
}

function substitute(array){
    return mapArray(array, function(el){
        return el < 30 ? '*': el
    })
}

function getPastDay(date, dayAgo){
    let oneDay = 3600 * 24 * 1000;
    let result = new Date(date - dayAgo*oneDay)
    return result.getDate();
}

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    let minutes = date.getMinutes();

    return `${year}/${month}/${day} ${hour}:${minutes}`;
}

// Testing
console.log(executeforEach([1, 2, 3], function (el) {
    console.log(el * 2);
}))
console.log(mapArray([2, '5', 8], function (el) {
    return el + 3;
}
))
console.log(flipOver('hey world'));
console.log(filterArray(
    [2, 5, 8], function (el) {
    return el % 2 === 0
}));
console.log(mapArray([2, '*', 8], function(el) {
    return el + 3
}) )
console.log(makeListFromRange([2, 7]));
console.log(getArrayOfKeys(actors, 'name'));
console.log(substitute([58, 14, 48, 2, 31, 29]));
console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));
console.log(formatDate(new Date('6/15/2018 09:15:00')))
console.log(formatDate(new Date()))