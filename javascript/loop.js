
let obj = {
    a: 100,
    b: 200
};
//for-in loop
for(let key in obj){
    // console.log(key + " = " +obj[key]);
}

for(let i = 0; i < Object.keys(obj).length; i++){
    // console.log(Object.keys(obj)[i] + " = " + obj[Object.keys(obj)[i]]);
}
//for-of loop
let arr = ['a', 'b', 'c', 'd', 'e', 0, 1];
for(let i of arr){
    // console.log(i + " of type "+typeof(i));
}


//loop functions 
let num = [1, 2, 3, 4, 5, 6];

num.forEach((Element)=>{
    console.log(Element*Element);
})