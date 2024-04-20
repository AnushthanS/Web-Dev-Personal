let increase = ()=>{
    let counter = document.getElementById("count");
    let count = parseInt(counter.innerHTML);
    counter.innerHTML = ++count;
}

let save = ()=>{
    let prev = document.getElementById('history');
    let counter = document.getElementById('count');
    prev.innerHTML = prev.innerHTML + counter.innerHTML + " "; 
    counter.innerHTML = '0';
}