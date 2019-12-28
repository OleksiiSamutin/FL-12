function isLeapYear(param) {
    let date = new Date(param)
    if (date.toString() === 'Invalid Date') {
        return 'Invalid Date';
    } else {
        if (new Date(date.getFullYear(), 1, 29).getDate() === 29) {
            return `${date.getFullYear()} is a leap year`;
        } else {
            return `${date.getFullYear()} is not a leap year`;
        }
    }
}

console.log(isLeapYear('2020-01-01 00:00:00'))
console.log(isLeapYear('2020-01-01 00:00:00777'))
console.log(isLeapYear('2021-01-15 13:00:00'))
console.log(isLeapYear('2200-01-15 13:00:00'))
console.log(isLeapYear(1213131313135465656654564646542132132131))