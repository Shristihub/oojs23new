class Student{
    constructor(name,studentId){
        this.name=name;
        this.studentId = studentId
    }
    details = function(){
        console.log(`Name ${this.name}`);
        console.log(`StudentId ${this.studentId}`);
    }
    greet = (message)=>{
        return `${message} ${this.name}`;
    }
    display(){
        console.log(`Printing data`);
        console.log(`Department ${this.department}`);
    }
}
// to add a new property to the Student class
Student.prototype.department = 'CSE';
Student.prototype.showHobbies = ()=> ['music','dance'];

Student.prototype.showCourses = (...courses)=>{
    courses.sort().forEach(element => {
        console.log(`courseName: ${element}`);
    });
}

let student = new Student('R',20);
student.details();
student.display();
student.showCourses('Java','Javascript','Angular','Spring');
console.log(student.greet('Have a great day'));

student.showHobbies().forEach(element => {
    console.log(`hobby: ${element}`);
});
let student1 = new Student('Sri',20);
student1.details();
student1.display();
console.log(student1.greet('Good bye'));
student1.showHobbies().forEach(element => {
    console.log(`hobby: ${element}`);
});


