let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        let key = this.innerHTML;
        playSound(key);
        stopAnimation(key);
    });
}

let playSound = (key) => {
    switch (key) {
        case 'w':
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case 'a':
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case 's':
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case 'd':
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'j':
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'k':
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'l':
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default: console.log(key);
    }
};

let stopAnimation = (key) => {
    let currentKey = document.querySelector("."+key);

    currentKey.classList.add('pressed');
    setTimeout(function(){
        currentKey.classList.remove('pressed');
    }, 100);
}

document.addEventListener('keypress', function(event){
    playSound(event.key);
    stopAnimation(event.key);
})