let x=10;
let y; //undefined
console.log(x+y); //NaN

greet();
// function declaration
function greet() {
    console.log('welcome');
}
let message='Great Day';
console.log(message);
//this should be called after the function expression
// show(); // gives error
// function expression 
var show = function () {
    console.log('Showing data');
}
show();


