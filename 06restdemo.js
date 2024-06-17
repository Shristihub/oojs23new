var total = function(){
    let sum=0;
    for (let index = 0; index < arguments.length; index++) {
        sum+= arguments[index];
    }
  console.log(sum);
}
total(1,1,2,344);
total(1,2);
total(1,2,34);


// only one and must be last
var calcSum=(...nums)=>{
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
   console.log(sum);
}
calcSum(90,100,90);
calcSum(90,100);
calcSum();


