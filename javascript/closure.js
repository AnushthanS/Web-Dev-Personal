function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    }
}

const increment = outer();

console.log(increment());
console.log(increment());