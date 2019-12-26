let game = true;
let playAgain;
let max = 8;
let min = 0;
let rand;
let userGuessNumber;
let attemptsNumber = 3;
let totalPrize = 0;
let possiblePrize = 100;
let prize = 100;
let tempPrize = prize;
while (game){

    game = confirm('Do you want to play a game?');
    if (!game){
        alert('You did not become a billionaire, but can.')
        break;
    }
    while (attemptsNumber>0){
        let boolContinue;
        rand = Math.floor(Math.random() * (max - min + 1)) + min;
        userGuessNumber = prompt(`Choose a roulete pocket number from ${min} to ${max}
Attempts left: ${attemptsNumber}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possiblePrize}$`,'')
         userGuessNumber = parseInt(userGuessNumber);
         if (userGuessNumber===rand){
             totalPrize+=prize;
             boolContinue=confirm(`Congratulation, you won!   Your prize is: ${prize}$. Do you want to continue?`)
         }

        possiblePrize = tempPrize /2;
        tempPrize = tempPrize/2;
        attemptsNumber--;

        if (boolContinue){
            prize*= 2;
            tempPrize=prize;
            possiblePrize = prize;
            max += 4;
            attemptsNumber = 3;
        }
        if (attemptsNumber === 0 || !boolContinue && typeof boolContinue !== 'undefined'){
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)

            playAgain = confirm('Do you want to play again?')
            if (playAgain){
                attemptsNumber=3;
                prize = 100;
                max = 8;
                possiblePrize = 100;
                tempPrize=prize;
                totalPrize = 0;
            }
            if (!playAgain){
                game = false;
                break;

            }


        }
    }

}