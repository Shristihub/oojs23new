call();
// function declaration
function call(){
    console.log('Welcome to js');
}
//function expression
 let greet = function(uname){
    console.log('Great Day'+uname);
}
greet('Sri'); 

//arrow functions
let message = ()=>{
console.log('Arrow');
}
message();
let sum = (x,y)=>{
    return x+y;
}
let total = sum(10,20);
console.log(total);

//func inside a function
function outer(fun,uname){
    fun(uname); //greet('Raj')
}
outer(greet,'Joe')

//function returning an object
//function returning another function






