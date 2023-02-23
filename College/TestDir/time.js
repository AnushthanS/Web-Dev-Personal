setTimeout(() => {
    console.log('hello world');
}, 2000);

setInterval(function () {
    console.log('greetings in interval');
}, 2000);

(() => {
    console.log('Anonymous func');
})();