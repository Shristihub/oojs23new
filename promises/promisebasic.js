let npromise = new Promise(function (resolve, reject) {
    let x = 10;
    
    setTimeout(() => {
        if (x > 10) {
            resolve("X is greater");
        } else
            reject("Error");
    }, 1000);
});
npromise.then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
})

let promise = new Promise((resolve, reject) => {
    let x = 100;
    setTimeout(() => {
        if (x > 10) {
            resolve("X is greater");
        } else
            reject("Error");
    }, 1000);

});
promise.then(value => {
    console.log(value);
}, error => {
    console.log(error);
});



