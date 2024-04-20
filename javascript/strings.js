let a = 10;
let b = 20;
let string = `a = ${a} and b = ${b}`; //template literal example
console.log(string);

console.log(string.slice(3));

const word = "tree";
const sentence = "A collection of bonsai trees";
console.log(`The word ${word} ${(sentence.includes(word))?'is' : 'isn\'t'} in the given sentence`);