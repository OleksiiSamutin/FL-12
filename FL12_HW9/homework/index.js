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


function convert(...args) {
    let result = [];
    for (let i = 0; i < args.length; i++) {
        result.push(typeof args[i] === 'number' ? String(args[i]) : Number.parseInt(args[i]))
    }
    return result;
}

function executeforEach(array, funct) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = funct(array[i])
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

function flipOver(string){
    let result = '';
    for (let i = string.length-1; i>=0; i--){
        result+=string[i]
    }
    return result;
}
console.log(executeforEach([1,2,3], function(el) {
    console.log(el * 2)
}))
console.log(mapArray([2,'5',8], function(el) {
    return el + 3
}
    ))
console.log(flipOver('hey world'));
