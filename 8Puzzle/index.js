const shuffle = (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};


function checkMovement(boxId, arr) {
    boxId = parseInt(boxId);
    boxId -= 1; //converted to index

    if(boxId < 6){
        if(arr[boxId + 3] == null) {
            return boxId + 3;
        }
    }
    if(boxId > 2){
        if(arr[boxId - 3] == null) {
            return boxId - 3;
        }
    }
    if(boxId+1 == 1 || boxId+1 == 2 || boxId+1 == 4 || boxId+1 == 5 || boxId+1 == 7 || boxId+1 == 8){
        if(arr[boxId + 1] == null) return boxId + 1;
    }

    if(boxId+1 == 2 || boxId+1 == 3 || boxId+1== 5 || boxId+1 == 6 || boxId+1 == 8 || boxId+1 == 9){
        if(arr[boxId - 1] == null) return boxId - 1;
    }
    return -1;
};

let values = [];
for(let i = 0; i < 8; i++){
    values[i] = i + 1;
}
values[8] = null;
shuffle(values);

for(let i = 0; i < 9; i++){
    $("#"+(i+1)).html(values[i]);
}

$('.box').click(function(){
    let boxId = $(this).attr('id');
    let move = checkMovement(boxId, values);
    if(move != -1) {
        $("#"+boxId).html(values[move]);
        $("#"+(move+1)).html(values[boxId - 1]);

        let temp = values[boxId - 1];
        values[boxId - 1] = values[move];
        values[move] = temp;
    }
});

console.log(values);

let flag = true;
for(let i = 0; i < 8; i++){
    if(values[i] != (i + 1)) flag = false;
}

if(flag) $('h1').text('Puzzle Completed!');