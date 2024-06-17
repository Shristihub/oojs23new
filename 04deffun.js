function greet(uname='Priya'){
    console.log('welcome ',uname);
}
greet(); // welcome Priya
greet('Sri'); // welcome Sri

function area(length=10,breadth){
    console.log(length*breadth);
}
area(20,20);
area(100);
area(undefined,1); // takes default value of length

// evaluates the default arguments at the time you call the function
function addNames(username, names=[]){
    names.push(username);
    return names;
}
console.log(addNames('Rohan'));
console.log(addNames('Poppy',['Sri','Priya']));

// parameter takes value based on the result of function call
function show(message = getMessage(),username = 'Priya'){
    console.log(message+username);
}
function getMessage(){
    return 'Great Day ';
}
show();
// assign a parameter a default value 
// that references other default parameters 
function sum(x=10,y=x,z=x+y){
    console.log(arguments.length);
    console.log('Sum',x+y+z);
}
sum(); // 0,Sum 40
sum(100,200,300); //3, Sum 600

function required(){
    throw new Error('Argument required')
}
function add(x = required(),y){
    console.log(x+y);
}
add(90,10);
add();