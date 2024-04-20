let num = Math.floor(Math.random() * 100) + 1;
const prompt = require("prompt-sync")({sigint: true});

let score = 100;
while (true){
    let guess = parseInt(prompt("Enter a number between 1 and 100: "));
    if(guess === num) {
        console.log("Your guess is correct, your score = ", score);
        break;
    }
    else if(guess > num) console.log("Your guess is greater than the answer!");
    else console.log("your guess is lesser than the answer!");

    score--;
};