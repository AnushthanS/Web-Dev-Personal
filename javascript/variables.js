let vari;
console.log(vari); //by default JavaScript variables have undefined values
// Since JavaScript is a dynamic language unlike Java or C, there is no need to declare any data type for a given variable

vari = 'Anushthan';
console.log(vari);

const fixd = 10;
console.log(fixd);

// fixd = 20;
// console.log(fixd);
// The lines above give an error, constant types cannot be changed after assignment, good to use to reduce errors due
// to reassignment in code

let a = null; //primitive null values
let b = undefined; 
// let b = 'abc'; will give an error, let can be reinitialized but
// can't be redeclared
let c = 'Anushthan';
let d = 9.36;
let e = 8126477754;
let f = true;
console.log(f);
{
    let f = false;
    console.log(f);
}

console.log(f);
