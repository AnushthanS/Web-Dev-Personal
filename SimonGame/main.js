var buttonColours = ["red", "blue", "green", "yellow"];
var generatedPattern = [], userPattern = [];

var gameFlag = false;
var level = 0;

$(document).on('keypress', function(){
    if(!gameFlag){
        $('#heading').text('Level 0');
        gameFlag = true;
        generateSequence();
    }
});

function generateSequence(){
    userPattern = [];
    $('#heading').text('level '+ (++level));
    let randomNum = Math.floor(Math.random() * 4);
    let randomColor = buttonColours[randomNum];

    generatedPattern.push(randomColor);

    $("#"+randomColor).fadeOut(200).fadeIn(200);
    playSound(randomColor);
}

$(".boxes").on('click', function(){
    let color = $(this).attr('id');
    userPattern.push(color);
    playSound(color);
    animateButton(color);
    checkAnswer(userPattern.length - 1);
});

function playSound(key){
    var audio = new Audio("sounds/"+key+".mp3");
    audio.play();
}

function animateButton(color) {
    $('#'+color).addClass('pressed');
    setTimeout(function(){
        $("#"+color).removeClass('pressed');
    }, 100);
}

function restart(){
    level = 0;
    generatedPattern = [];
    gameFlag = false;
}

function checkAnswer(currentLevel){
    debugger;
    if(generatedPattern[currentLevel] === userPattern[currentLevel]){
        if(userPattern.length === generatedPattern.length){
            setTimeout(function(){
                generateSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $('body').addClass('game-over');
        $('#heading').text('Game Over! Press any key to restart');
        restart();
        setTimeout(function(){
            $('body').removeClass('game-over');
        }, 200);
    }
}