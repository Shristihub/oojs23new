
let nums = [10,20,30]
for (let num of nums) {
    num+=10;  // using let allows to change variable 
    console.log(num);
}
for (const num of nums) {
    console.log(num);
}
// array.entries() method returns a pair of [index, element]
let courses = ['Java','Spring','Angular','Node']
for (const [index,course] of courses.entries()) {
    console.log(`${course} with id ${index}`);
}

let 