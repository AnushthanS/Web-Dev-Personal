const numbers = [1, 2, 3];
const doubled = numbers.map(x => 2*x);
console.log(doubled);

numbers.push(4, 5, 6);
console.log(numbers);

const evens = numbers.filter(x => x%2 === 0);
console.log(evens);

const sum = numbers.reduce((sum, num) => sum = sum + num, 0);
console.log(sum);

const concatenated = numbers.concat(evens).concat(sum);
concatenated.forEach(x => console.log(x));