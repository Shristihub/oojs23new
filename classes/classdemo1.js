class Employee{
    static #company ='Shristi'; //private
    constructor(ename,city){
        this.ename = ename;
        this.city = city;
    }
    printDetails(){
        console.log(`Welcome ${this.ename} to ${this.city}`);
        console.log(`Company ${Employee.#company}`);
        this.#show().forEach(c=>console.log(c))
    }
    // private method
    #show(){
        return ['Java','angular','Node']
    }
}
let emp = new Employee('Tina','Bangalore');
console.log(emp.ename);
emp.printDetails()
