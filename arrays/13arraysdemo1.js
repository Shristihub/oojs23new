// To find the first element of an array 
// that satisfies the condt
let marks = [10,20,3,4,20]; 
// returns the first element
let result = marks.find(num=>num>10);//20

console.log(result);

let employees= [{ename:'Ram',salary:1000},
                {ename:'Jo',salary:2000},
                {ename:'Kevin',salary:1200}]

console.log(employees.find(emp=>emp.salary>1000))

// find the index of first matching element
console.log(marks.findIndex(num=>num>10)); //1

let res = marks.findIndex((num, index)=>num>10 && index>2); //4
console.log(res)
