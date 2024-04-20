//Question 1
let flag = true;
while (flag){

    let age = prompt("Enter age: ", "0");
    age = Number.parseInt(age);
    //Question 3
    if(age < 0) {
        console.error("Negative value received as age");
        break;
    }

    //1
    alert(`You ${(age >= 18)? 'are':'aren\'t'} eligible to drive`);

    //Question 2
    flag = confirm("Do you want to see the prompt again?");
}

//Question 4
let num = prompt("Enter a number");
if(num > 4) location.href = "https://www.github.com/";


//Question 5
let color = prompt("Enter a valid background color");
document.body.style.backgroundColor = color;