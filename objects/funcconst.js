// create a class in js
var Student= function(name,city){
    this.name = name;
    this.city = city;
    this.greet = function(){
        console.log(`welcome ${this.name} from ${this.city}`)
    }
}
//create  an object
var student = new Student('Priya','Bangalore');
student.phone =9283940;
console.log(student.name);
console.log(student.city);
console.log(student.phone);
student.greet();

Student.prototype.mobile = 98987878;
Student.prototype.check = function(message){
    console.log(message,`${this.name}`);
}

var student1 = new Student('Sri','Bangalore');
console.log(student1.name);
student1.mobile = 928393040;
console.log(student1.mobile);
student1.greet();
student1.check('Great Day');


