document.writeln("<button class='dmode' onclick='dark()'>Click for Dark Mode</button>");

let dark = ()=>{
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    let buttons =  Array.from(document.getElementsByClassName("dmode"));
    buttons[0].innerHTML = "After hours";
}