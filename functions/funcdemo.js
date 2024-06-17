// sum(2,3);
// // function declaration
// function sum(x, y) {
//     console.log(x + y);
// }
// // total(10,20);
// // anonymous function -  function expression
// var total = function(x,y){
//     console.log(x + y);
// }
// total(10,20);


// // function check (){
// //     console.log('checking....')
// // }
// function check(name){
//     console.log(`checking....${name}`)
// }
// check();



// // function as parameter
// var greet = function(){
//     console.log('Have a great day');
// }
// var showMessage = function(func){
//     func();
// }
// showMessage(greet);

// // create a function as sayHello taking uname as parameter
// // print hello uname
// var sayHello = function(uname){
//     console.log(`Hello ${uname}`);
// }

// // create another function printMessage that takes func as parameter
// var printMessage = function(x,uname){
//     x(uname);// here x is a function
// }
// printMessage(sayHello,'Sri');

// var calculate = function(){
//     var sum = 0;
//     for (let i = 0;i < arguments.length; i++) 
//         sum+= arguments[i];
//     return sum;
// }
// var printAvg = function(fun,x,y,z){
//     let sum = fun(x,y,z);
//     console.log(sum);
// }
// printAvg(calculate,12,12,90);


// var show = (uname)=>{
//     console.log(`Have a great day ${uname}`);
// }
// show("Sri");

 function greeter(){
    console.log(`Have a great day `);

}
greeter();
//IIFE
(function greeter(){
    console.log(`Have a great day `);

})();

