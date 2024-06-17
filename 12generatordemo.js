
function* check(){
    console.log('Test one');
    yield 1;
    console.log('Test two');
    yield 2;
    console.log('Test three');
    yield 3;

}
// returns a generator object without executing it
let gen = check(); 
console.log(gen); //Object [Generator] {}

let result = gen.next(); 
console.log(result); // yield returns 1

result = gen.next(); 
console.log(result); // 
result = gen.next(); 
console.log(result);
result = gen.next(); 
console.log(result);

