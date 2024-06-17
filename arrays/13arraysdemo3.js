
// map
let marks = [10,50,45,11,12,33];
marks.map(num=>Math.pow(num,2)).filter(num=>num>100).forEach(num=>console.log(num))

marks.filter(num=>num>100).forEach(num=>console.log(num))


marks.map(num=>num*2).forEach(num=>console.log(num));
let fruits = ['a','b','c','d','e','f','g'];
fruits.map(f=>f.concat(f)).forEach(fr=>console.log(fr));

//filter
console.log('Filtering');
marks.filter(num=>num%2==0).forEach(num=>console.log(num));

//sort
console.log('Sorting');
marks.filter(num=>num%2==0)
    //  .sort((a,b)=>a-b)
      .sort()
    .forEach(num=>console.log(num));

//reduce
console.log('Reduce');
let sum = [100,200,300].reduce((pv,cv)=>pv+cv);
console.log(sum);

// to check whether all the array elements pass a test
// all elements should be greater than 2
console.log('Using every');
let nums = [12,1,3,4];
let res = nums.every(num=>num>2)
console.log(res);
let unames= ['Priya','Sri','Roni']
res = unames.every(uname=>uname=='Kevin');
console.log(res);
//some
//to check if atleast one element of the array pass a test
console.log('Using some');
res = nums.some(num=>num>2);
console.log(res);

//concat
console.log('concat');
let newarr = [100,200].concat(marks);
console.log(newarr);

//flat a nested array
console.log('flat');
let numbers = [1,2,3,[4,5]]
let nnum = numbers.flat();
console.log(nnum);

numbers = [1,2,3,[4,5,[11,22,33]]]
nnum = numbers.flat(2);
console.log(nnum);
// flatMap is combination of the map followed by the flat()
let proverb = ['Betty bought some butter','better','','butter']
let words = proverb.map(word=>word.split(" "));
console.log(words);
console.log('Using flat map');
words = proverb.flatMap(word=>word.split(' '));
console.log(words);
console.log('Using Join - returns a string');
console.log(words.join(' '));