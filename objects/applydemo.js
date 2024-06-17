// create a User constructor - name, department
// create a Employee name
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
let greetMessage = function(message){
    console.log(`${message} ${this.name}`);
}

let employee = new Employee('Jack','Admin');
let student = new Student('Helen');
// using apply
// function.apply(for which object,the arguments needed by greet function)
//pass arguments as array
greetMessage.apply(employee,['Have a great day'])
greetMessage.apply(student,['Enjoy training'])

showCourses = function(...courses){
    courses.forEach(value=>console.log(value));
}
showCourses.apply(employee,['Java','Spring','Angular']);
showCourses.apply(student,['Java','Spring']);





// var checkName = function(){
//     var uname = this.name;
//     if(uname.startsWith('J')){
//         console.log('Hello',uname);
//     }else
//         console.log('your name is invalid',uname);

// }
// checkName.apply(user);
// checkName.apply(employee);

// var show = function(amount,bonus,message){
//     console.log(`${message} ${this.name}`);
//     console.log(`Your final amount is, ${amount+bonus}`);
// }
// show.apply(user,[9000,2000,'Great Day']);
// show.apply(employee,[90000,20000,'Your Increment Details']);
