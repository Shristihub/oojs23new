// function declaration
function greet(username) {
    return `Have a great day ${username}`
}
console.log(greet('Sri'));

 // anonymous function -  function expression
let total = function(x,y){
    console.log(x + y);
}
total(10,20);

//IIFE or self invoking
(function(){
    console.log(`Automatically invoked`);
})();

(function(x,y){
    console.log(`Product${x*y}`);
})(10,30);


// arrow function
let squareRoot = (num)=>console.log(`Square ${Math.sqrt(num)}`);
squareRoot(16);

let print = (username)=>console.log(`Printing data ${username}`);

//  function taking function as parameter
let showData = function(func,username){
    console.log(`Show Details`);
    func(username);
}
showData(print,'Sri');

let sum = function(x,y,z){
    console.log(`Calculating sum`);
    return x+y+z;
}
// function having function as parameter
function printAvg(func,x,y,z){
    console.log(`Printing Average`);
    let sum = func(x,y,z);
    console.log(`Average:${sum/3}`);
}
printAvg(sum,40,50,60);

