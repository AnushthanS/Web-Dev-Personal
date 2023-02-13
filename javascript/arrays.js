let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
delete(numbers[4]); //an operator, similar to typeof
console.log(numbers, numbers.length); 
// delete property will essentially only replace the item at the 
//specified index

console.log(numbers.pop());
console.log("Length of the array after push = " + numbers.push(3) + " , " + numbers);

console.log(numbers.shift(), numbers, numbers.unshift(1));
// shift returns the element removed from the start, unshift
//returns the new lenght of the array after adding an element
// to the start of the array


let nums = [10, 20, 30, false, true];
let merged = numbers.concat(nums);
console.log(merged);

let more_merged = merged.concat(numbers, nums);
console.log(more_merged);

for(let i = 0; i < more_merged.length/2; i++){
    more_merged.pop();
}

let customComparator = (a, b) =>{
    return a - b;
}

console.log(more_merged.sort(customComparator));


console.log(numbers);
let deletedValues = numbers.splice(2, 3, 100, 200, 300);
console.log(numbers, deletedValues);
console.log(numbers.sort(customComparator));

console.log(numbers.slice(3));

let str_arr = Array.from("Anushthan");
//can be used for : Array.from(document.getElementById("example"));


//loop functions
let num = [1, 2, 3, 4, 5, 6];

num.forEach((el)=>{
    console.log(el*el);
})

let sq_num = num.map((el) =>{
    return el*el;
});
console.log(sq_num);

let num2s = sq_num.filter((value)=>{
    return value > 15;
});
console.log(num2s);

//reduces the array to a single value
let sum_nums = sq_num.reduce((a, b)=>{
    return a + b;
});