let promise = new Promise((resolve, reject) => {
    let mobiles = [
        { model: 'A123', brand: 'Samsung', price: 20000 },
        { model: 'B123', brand: 'Samsung', price: 20000 },
        { model: 'M12', brand: 'Vivo', price: 8000 }
    ];
    let x = 10;
    setTimeout(() => {
        if (x > 1) {
            resolve(mobiles);
        } else {
            reject('Error');
        }
    }, 3000);
});

// promise.then((val)=>{},(error)=>{}).catch((ex)=>{}).finally(()=>{}) 
promise.then((mobiles) => {
    let mobilesList = mobiles.filter(mobile => mobile.brand == 'Samsun')
    if (mobilesList.length <= 0) {
        throw new Error('no mobiles');
    }
    console.log(mobilesList);
}, (error) => {
    console.log(error);
}).catch((e) => {
    console.log('exception', e);
}).finally(() => {
    console.log("called in both cases");
})