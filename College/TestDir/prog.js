const ProgressBar = require('progress');

const bar = new ProgressBar(':bar :percent :elapsed', {total: 10});

let timer = setInterval(function(){
    bar.tick();
    if(bar.complete){
        console.log("\ncompleted\n");
        clearInterval(timer);
    }
}, 100);