let game = confirm('Do you want to play a game?');
let max = 8;
let min = 0;
let rand;
let userGuessNumber;
let attemptsNumber = 3;
let totalPrize = 0;
let possiblePrize = 100;
let minPrize = 25;
let averPrize = 2 * minPrize;
let maxPrize = 2 * averPrize;
if (game) {
    while (attemptsNumber > 0) {
        let boolContinue;
        if (attemptsNumber === 1) {
            possiblePrize = minPrize;
        } else if (attemptsNumber === 2) {
            possiblePrize = averPrize;
        } else if (attemptsNumber === 3) {
            possiblePrize = maxPrize;
        }
        rand = Math.floor(Math.random() * (max - min + 1)) + min;
        userGuessNumber = parseInt(prompt(`Choose a roulete pocket number from ${min} to ${max}
Attempts left: ${attemptsNumber}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$
rand: ${rand}`, ''))
        if (attemptsNumber === 3 && userGuessNumber === rand) {
            totalPrize += maxPrize;
            boolContinue = confirm(`Congratulation, you won!   Your prize is: ${maxPrize}$. Do you want to continue?`)

        } else if (attemptsNumber === 2 && userGuessNumber === rand) {
            totalPrize += averPrize;
            boolContinue = confirm(`Congratulation, you won!   Your prize is: ${averPrize}$. Do you want to continue?`)
        } else if (attemptsNumber === 1 && userGuessNumber === rand) {
            totalPrize += minPrize;
            boolContinue = confirm(`Congratulation, you won!   Your prize is: ${minPrize}$. Do you want to continue?`)
        }

        attemptsNumber--;
        if (boolContinue) {
            maxPrize *= 2;
            averPrize *= 2;
            minPrize *= 2;
            attemptsNumber = 3;
        }
        if (attemptsNumber === 0 || !boolContinue && typeof boolContinue !== 'undefined') {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)
            break;
        }
    }

} else {
    alert('You did not become a billionaire, but can.')
}