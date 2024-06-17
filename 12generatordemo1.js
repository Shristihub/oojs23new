
function*  show(...nums){
    for (const num of nums) {
        if(num%2==0)
         yield num
    }
}

let iter = show(93,20,15,99,80,11,30);
let result = iter.next();
console.log(result);
result = iter.next();
console.log(result);
result = iter.next();
console.log(result);