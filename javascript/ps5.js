const prompt = require("prompt-sync")({sigint: true});

//Question 1: take input from the user to get an array
//Question 2: Keep adding till you get a zero

// let size = prompt("Enter the number of elements for the array: ");
// size = parseInt(size);
// let arr = new Array(size);

let arr = [];
let index = 0;
console.log("Enter the elements: ")
while(true){
    let val = prompt();
    if(val === '0') {
        break;
    }
    else arr[index++] = val;
}
console.log("Input given = ", arr, ", size of the array = ", arr.length);

//Question 3: filter for numbers divisible by 10

let arr2 = arr.filter((val)=> {
    return val % 10 === 0;
})
console.log("filter for elements divisible by 10", arr2);


//Question 3: create an array of squares for any given array
let arr3 = arr.map((val)=> {return val*val});
console.log("square array = ", arr3);

//Question 4: Use reduce to calculate the factorial of a number
let num = prompt("Enter the number to calculate factorial for: ");
num = parseInt(num);
let population = [];
for(let i = 0; i < num; i++){
    population[i] = i + 1;
}

let factorial = population.reduce((a, b)=>{
    return a*b;
});
console.log("Factorial of %d is %d",num, factorial);