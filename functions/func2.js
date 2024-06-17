// outer function
let naverage = function (x, y, z) {
  console.log(`Calculating`);
  //IIFE
  let avg = (function () {
    console.log(`Sum...`);
    return x + y + z;
  })() / 3;
  console.log(`Average: ${avg}`);
};
naverage(70, 80, 120);

//function returning another function
let faverage = function(x,y,z){
   return function(){
    console.log(x+y+z);
  }
}
let sum = faverage(10,20,30);
sum();
faverage(100,90,80)();

//function returning another function
let fbaverage = function(x,y,z){
  return function(){
   return x+y+z;
 }
}
let nsum = fbaverage(10,20,30);// returns a function
console.log(`Avg ${nsum()/3}`);

let fsum = fbaverage(90,90,90);// returns a function
let avg = fsum()/3;
console.log(avg);

let result = fbaverage(80,90,90)(); // a value
console.log(result/3);








