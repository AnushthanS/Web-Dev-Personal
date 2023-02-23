setTimeout(() => {
    console.log('hello world');
}, 2000);

// setInterval(function () {
//     console.log('greetings in interval');
// }, 2000);

(() => {
    console.log('Anonymous func');
})();


let add = (a, b) => {console.log(a+b)};

// setTimeout(add(1, 2), 200); will throw an error, input is a function not a function call
setTimeout(add.bind(this, 1, 2), 4000);
//or
setTimeout(add, 4000, 3, 4)