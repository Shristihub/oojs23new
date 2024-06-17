// backtick for template literals
let message = `How're you?`;
console.log(message); 

let firstname = 'Sri'
console.log('Welcome ', firstname);
console.log(`Welcome ${firstname}`); // interpolation

// backtick for multiple lines
let sentence = `This is a paragraph
                spanning across multiple 
                lines.`

console.log(sentence); 

let price =90.0;
let quantity = 10;
console.log(`Total: ${price*quantity}`);

//Octal literals and binary literals
let x = 0o123;
let y = 0b100;
let z = parseInt('1010',8)
console.log(x);
console.log(y);
console.log(z);

