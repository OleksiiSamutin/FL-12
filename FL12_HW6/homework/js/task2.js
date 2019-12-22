let inputA = prompt("Enter 'a' side of triangle length", '');
let inputB = prompt("Enter 'b' side of triangle length", '');
let inputC = prompt("Enter 'c' side of triangle length", '');
let a;
let b;
let c;
let values = [inputA, inputB, inputC]

for (let i = 0; i < 3; i++) {
    if (!(!isNaN(values[i]) && !isNaN(parseFloat(values[i])))) {
        alert('input values should be ONLY numbers ')
        break;
    }
    if (Number.parseInt(inputA) === 0) {
        alert('A triangle must have 3 sides with a positive definite length')
        break;
    }
}
a = Number(inputA);
b = Number(inputB);
c = Number(inputC);
if (a + b <= c || a + c <= b || b + c <= a) {
    console.log('Triangle doesn’t exist')
} else if (a === b && b === c) {
    console.log('Equilateral triangle')
} else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle')
} else {
    console.log('Scalene triangle')
}