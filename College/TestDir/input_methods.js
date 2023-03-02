const readline = require('readline');
//const prompt = require('prompt-sync');
//let inp = prompt("Input here ");

var readPrompt = readline.createInterface(process.stdin, process.stdout);

let userIn;
readPrompt.question("Input in format {a,b,operator}: ", (line) => {
    let arr = line.split(",");
    let a = arr[0], b = arr[1], op = arr[2];
    a = parseInt(a), b = parseInt(b);
    switch(op){
        case '+': console.log("Sum = "+ (a+b));
            break;
        case '-': console.log("Difference = "+ (a-b));
            break;
        case '*': console.log("Product = "+ (a*b));
            break;
        case '/': if(b != 0){
            console.log('Quotient = '+ (a/b));
        } else console.log("Divide by zero error");
            break;
    }
    readPrompt.close();
});