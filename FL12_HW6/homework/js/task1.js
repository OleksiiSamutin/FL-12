let inputA = prompt("Enter 'a' Coefficient", '');
let inputB = prompt("Enter 'b' Coefficient", '');
let inputC = prompt("Enter 'c' Coefficient", '');
let a;
let b;
let c;
let x1;
let x2;
let discriminant;
let values;
values = [inputA, inputB, inputC]

for (let i = 0; i < 3; i++) {
    if (!(!isNaN(values[i]) && !isNaN(parseFloat(values[i]))) || Number.parseInt(inputA) === 0) {
        alert('Invalid input data')
        break;
    }
}
a = Number(inputA);
b = Number(inputB);
c = Number(inputC);
discriminant = b * b - 4 * a * c;
console.log(discriminant)
if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / 2 * a
    x2 = (-b - Math.sqrt(discriminant)) / 2 * a
    console.log('X1 = ' + x1)
    console.log('X2 = ' + x2)
} else if (discriminant === 0) {
    x1 = -b / 2 * a;
    console.log('X = ' + x1)
} else {
    console.log('no solution')
}