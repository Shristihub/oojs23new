var total = function(){
    let sum=0;
    for (let index = 0; index < arguments.length; index++) {
        sum+= arguments[index];
    }
  console.log(sum);
}
total(1,1,2,344);
total(1,2);
total(1,2,34);

// rest parameter - dynamic array function(...arr)
var total = function(...arr){
    let sum=0;
    for (let index = 0; index < arr.length; index++) {
        sum+= arguments[index];
    }
    console.log(sum);
}
total(1,1,2,344);
total(1,2);
total(1,2,34);

// spread operator

let num1 = [10,20];
let num2 = [30,40];

let num3 = [...num1,...num2];
num3.forEach(val=>console.log(val))