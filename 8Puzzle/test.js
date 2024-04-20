let values = [];
for(let i = 0; i < 8; i++){
    values[i] = i + 1;
}

values[8] = null;

for(let i = 0; i < 9; i++){
    $("#"+(i+1)).html(values[i]);
}


function checkCompletion(values){
    let flag = true;
    for(let i = 0; i < 8; i++){
        if(values[i] != (i + 1)) flag = false;
    }
    
    if(flag) $('h1').text('Puzzle Completed!');
}


setTimeout(checkCompletion, 5000, values);