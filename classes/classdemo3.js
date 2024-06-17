class Employee{
   
   set empname(ename){
        this.empname=ename;
    }
   get empname(){
    return this.ename;
   }
   printDetails(){
    console.log(`Welcome ${this.ename}`);
}
}
let emp = new Employee();
emp.empname='Tina'
console.log(emp.empname);
emp.printDetails()
