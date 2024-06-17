async function sayHello(username){
    return `Welcome ${username}`;
}
// similar to this is sayHello()
function greet(username){
    return Promise.resolve(`Welcome ${username}`)
}

sayHello('Priya')
  .then((val)=>console.log(val));
  