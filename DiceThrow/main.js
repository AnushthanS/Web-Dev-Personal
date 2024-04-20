
let randomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

let writeWinner = (val1, val2) => {
    if(val1 > val2) {
        document.getElementById('winner').innerHTML = "Player 1 wins!"
    } else if(val2 > val1) {
        document.getElementById('winner').innerHTML = "Player 2 wins!"
    } else {
        document.getElementById('winner').innerHTML = "It\'s a draw!"
    }
};

let refresh = () => {
    let player1 = document.getElementById('player-1');
    let player2 = document.getElementById('player-2');
    let val1 = randomValue(1, 7);
    let val2 = randomValue(1, 7);

    player1.src = `images/dice${val1}.png`;
    player2.src = `images/dice${val2}.png`;
    writeWinner(val1, val2);
};

