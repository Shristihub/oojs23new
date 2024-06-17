export let message = 'hello'
// to export a value
// can have only one export default
export default 'Only one default possible'
export function log(){
    console.log('logging data');
}

export let greet = function(){
    console.log('Great day');
    check()
}
let check = function(){
    console.log('not exported');
 }

function greeter(){
    console.log("welcome");
}
// you can also export default a  function
// already added one default so cant add here
// export default greet;