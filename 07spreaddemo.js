let employee = {name:'Ram',employeeId:10};
let address = {city:'Bangalore',state:'karnataka'}

// spread operator
let details = {...employee,...address};
console.log(details);


let arr1 = [10,20,30];
let arr2 = [123,234,145];

let arr3 = [...arr2];//copy
arr3.push(...arr1);
console.log(arr3);

let arr4 = [100,...arr1] ;// concat
console.log(arr4);

console.log(Math.max(...arr1,...arr2));

let chars = ['a',...'pop'];
console.log(chars);

