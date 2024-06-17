// sync function
function sayHello(username){
    return `Welcome ${username}`;
}
sayHello('Sri')

//async
async function greetUser(username){
    // returning a promise
    return `Welcome ${username}`;
}
// similar to async function
function greet(username){
    return Promise.resolve(`Welcome ${username}`);
}

var promise1 = greetUser('Sri');
promise1.then((val)=>console.log(val));

greet("Priya").then((val)=>console.log(val));



// let promise = new Promise((resolve, reject) => {
//         let mobiles = [
//             { model: 'A123', brand: 'Samsung', price: 20000 },
//             { model: 'B123', brand: 'Samsung', price: 20000 },
//             { model: 'M12', brand: 'Vivo', price: 8000 }
//         ];
//         let x = 10;
//         setTimeout(() => {
//             if (x > 1) {
//                 resolve(mobiles);
//             } else {
//                 reject('Error');
//             }
//         }, 3000);
//      });
//     getAll().then((mobiles)=>{
//         mobiles.filter(mobile=>mobile.brand==brand)
//                .forEach(mobile => console.log(mobile));
//     },(error)=>{})

// getByBrand('Samsung')




