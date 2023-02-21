let os_test = require('os');
console.log(os_test.hostname(), os_test.machine());

let ptest = require('path');
console.log(ptest.parse(__dirname));