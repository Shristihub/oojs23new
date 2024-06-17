// PromiseChaining
let promise = new Promise((resolve,reject)=>{
    let x=10;
    if(x>1){
        resolve(x);
    }else
        reject("Error");
});
promise.then((val)=>{
   console.log(val); //10
    return val*2; // returns a promise
}).then(num=>{
    console.log(num);//20
    return num*3; // returns a promise
}).then(num=>{
    console.log(num); //60
})