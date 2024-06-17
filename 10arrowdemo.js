let greet = function(){
    console.log('welcome');
}
//arrow function
let greeter = (username)=>console.log(`Great Day ${username}`);
greeter('Sri')

// returns a value
let sum = (x,y)=>x+y;
console.log(sum(20,30));

['java','node','angular']
            .map(course=>course.charAt(1))
            .forEach(str=>console.log(str))


let details = function(uname,dep){
    return {
        sname:uname,
        dept:dep
    }
}
console.log(details('Sri','CSE'));

// return an object literal use paranthesis
details = (uname,dep)=>({sname:uname,dept:dep})
console.log(details('Priya','CSE'));
