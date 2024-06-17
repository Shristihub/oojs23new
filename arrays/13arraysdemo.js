let arr = new Array();
console.log(arr[0]);// undefined

arr = new Array(2); // size
console.log(arr.length);
console.log(arr[0]); // undefined
arr[0]=200;
arr[2]=80;
arr.push(18)
console.log(arr); //[ 200, <1 empty item>, 80 ]

arr = new Array(20,10); // values
console.log(arr.length);
console.log(arr[0]); // 20
console.log(arr); //[ 20,10]

//dynamic
arr = Array.of(10,20,304,50,60); // values
arr[0]=100
console.log(arr); //[ 100,20,304,50,60]
arr[10]=900;
console.log(arr)
arr.forEach(num=> console.log(num))

// To create an array from an array-like object
function showdata(){
 return Array.from(arguments,x=>x*x);
}
let newarr = showdata(90,80,70);
console.log(newarr);

let nums = [10,20,30];
let nums1 = [100,200,300];


function check(val){
    if(val>10)
        console.log(val);
}
nums.forEach(num=>checkEven.call)

