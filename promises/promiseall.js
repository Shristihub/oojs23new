
const promise1 = new Promise(function (resolve, reject) {
    let x = 1;
    setTimeout(() => {
        if (x > 10) {
            console.log("Promise one");
            resolve("Promise one executed");
        } else
            reject("Error");
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    let x = 200;
    setTimeout(() => {
        if (x > 10) {
            console.log("Promise two");
            resolve("Promise two executed");
        } else
            reject("Error occured");
    }, 1000);
});
//  returns a promise that is rejected 
const promiseall = Promise.all([promise1, promise2])
promiseall
    .then(allvalues => {  // this will not be executed
        allvalues.forEach(value => {
            console.log(value);
        });
    }, error => {
        console.log(error);    });



