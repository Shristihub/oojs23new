// create a User constructor - name, department
// create a Employee name
class Employee {
    constructor(name){
    this.name = name;
   }
}
class Student{
    constructor(name){
    this.name = name;
   }
}
let employee = new Employee('Jack');
console.log(employee.name);
let student = new Student("Helen");
// use only anonymous function 
let greetMessage = function(message){
    console.log(`${message} ${this.name}`);
}
// using call
// function.call(for which object,the arguments needed by greet function)
//pass arguments as individual values
greetMessage.call(employee,'Great Day')
greetMessage.call(student,'Enjoy training')

let showCourses = function(...courses){
    courses.forEach(value=>console.log(value));
}
showCourses.call(employee,'Java','Spring','Angular');
showCourses.call(student,'Java','Spring');


// checkName -> check if the name of the employee starts
// with Your starting letter if yes welcome him
// else print invalid name

var checkName = function(){
    var uname = this.name;
    if(uname.startsWith('J')){
        console.log('Hello',uname);
    }else
        console.log('your name is invalid',uname);

}
checkName.call(user);
checkName.call(employee);

// var show = function(amount,bonus,message){
//     console.log(`${message} ${this.name}`);
//     console.log(`Your final amount is, ${amount+bonus}`);
// }
// show.call(user,9000,2000,'Great Day');
// show.call(employee,90000,20000,'Your Increment Details');
