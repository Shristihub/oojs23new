
let arr = [100,200,300,400,500]

// destructuring arr
let [a,b,c,d,e] = arr;
console.log(a); // 100
console.log(b); // 200
console.log(c); // 300
console.log(d);//400

let [x,,y,z,m,n]=arr;
console.log(x); // 100
console.log(y); // 300
console.log(z); // 400
console.log(n); //undefined 

let [p,q]=arr;
console.log(p);//100
console.log(q);//200

let employee = {empname:'Ram',employeeId:10}

// destructuring object 
//rule -- the variable name same as property -order doesnot matter
// add new property but with value
let {empname,city="Bangalore",employeeId}=employee;
console.log(empname);
console.log(city);
console.log(employeeId);



