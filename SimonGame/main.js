const randomValue = (low, high) => {
    return Math.floor(Math.random()*(high - low) + low);
};

let flag = false;
standard();


const testStart = () => {
    if(flag) {
        // startGame();
    }
    else{
        gameOver();
    }
};

const getId = (num) => {
    switch(num){
        case 1: return 'green';
        case 2: return 'red';
        case 3: return 'yellow';
        case 4: return 'blue';
    }
};

const standard = () => {
    $('.boxes').on('click', () => {});

    $('html').on('keypress', () => {
        if(!flag){
            $('#heading').text("Game started");
            setTimeout(startGame, 1000);
        }    
    });
};



const gameOver = () => {
    $('#heading').text('Game over, press any key to restart');
    let color = $('body').css('background-color');
    $('body').css('background-color', 'red');
    setTimeout(() => {
        $('body').css('background-color', color);
    }, 150);
}

const startGame = () =>{
    let level = 1;
    $('#heading').text('Level '+level);

    let values = [], input = [];
    let tval = 1000;
    while(true){
        flag = true;
        for(let i = 0; i < level; i++){
            let num = randomValue(1, 4);
            let identifier = getId(num);
            values[i] = identifier;
            setTimeout(animateButton, tval, identifier);
            if(tval > 500 && i % 2 == 0) tval -= 100;
        }
        
        while(true){
            let inId;
            $('.boxes').on('click', () => {
                inId = $(this).attr('id');
            });
        }

        for(let i = 0; i < level; i++){
            if(values[i] != level[i]){
                gameOver();
                break;
            }
        }
        level++;
    }
};

const animateButton = (identifier) => {

};