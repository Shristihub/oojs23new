// function constructor -> behaves like a class
// function name should be with first letter capital letter
function Employee(name, city, department) {
    this.name = name;
    this.city = city;
    this.department = department;
    this.showDetails = function () {
        console.log(`welcome ${this.name}`);
    }
}
//create an object
let employee = new Employee('Raju', 'bangalore', 'Tech');
console.log(employee.name);
console.log(employee.department);
employee.showDetails();
// to add to the employee class
Employee.prototype.employeeId=10;
Employee.prototype.printCourses = function(course){
    console.log(`${course}`+this.department);
}
let employee1 = new Employee('Priya', 'bangalore', 'Tech');
employee1.printCourses('java');
console.log(employee1.employeeId);



