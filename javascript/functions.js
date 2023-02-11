function fibonacci(x){
    if (x == 0 || x == 1) return x;
    return fibonacci(x - 1) + fibonacci(x - 2);
}

console.log(fibonacci(10));

//arrow functions 
const factorial = (n) =>{
    if(n <= 1) return 1;
    return n * factorial(n - 1);
} 

console.log(factorial(5));