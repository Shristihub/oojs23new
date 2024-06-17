const uname = 'Priya';
console.log(uname);
// uname='Raju'; //TypeError: Assignment to constant variable.

// employee is immutable
const employee ={ empName:'Ram',city:'Bangalore'}
employee.city='Ooty'; // this property is mutable
console.log(employee.city);
// immutable
// employee = {};//TypeError: Assignment to constant variable.

// fruits is immutable
const fruits = ['apple']
fruits.push('kiwi'); // array is mutable
console.log(fruits); 
// fruits = []; //TypeError: Assignment to constant variable.

// const can be used as block scoped variable if not required to change
for(const fruit of fruits)
 console.log(fruit);


