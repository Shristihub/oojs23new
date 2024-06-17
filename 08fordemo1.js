
let employees = [
    {name:'Roy',salary:2000}, 
    {name:'Kevin',salary:12000},
    {name:'Jane',salary:2500}
    ]
for (const emp of employees) {
    console.log(emp);
}
let sum=0;
for (const {salary} of employees) {
    sum+=salary
}
console.log(`Total Sum: ${sum}`);

for (const str of 'hello') {
    console.log(str); 
}

let courses = new Map();
courses.set('ball','circle'); 
courses.set('box','rectangle');
courses.set('pizza slice','triangle'); 

for (const course of courses) {
    console.log(course);
}

let nums = new Set([10,20,30]);
for (const num of nums) {
    console.log(num);
}


