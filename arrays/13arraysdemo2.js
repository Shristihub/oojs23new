
let marks = [10,20];
// adds the element in the end & returns the length
let len = marks.push(90);
console.log(marks);
console.log(len);
// returns the last element and removes
console.log(marks.pop());
console.log("..",marks);
let nums = [1,2];
nums.push(...marks)
console.log(nums);
// adds the element to the start & returns the length
console.log(nums.unshift(100,90))
console.log(nums);
// returns the first element and removes
console.log(nums.shift())
console.log(nums);
let days = ['mon','tues']
days.push(...['wed, thurs']);
console.log(days);

let fruits = ['a','b','c','d','e','f','g'];
//startindex, endindex-1
// new array has sliced elements
let nfruits = fruits.slice(1,4);
console.log(nfruits);
// start, count
// array is modified
// element added at deleted position
fruits.splice(1,4,'kk'); 
console.log(fruits);
console.log(fruits.includes('f'));

