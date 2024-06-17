for (var x = 0; x < 4; x++) {
    console.log(x); // prints 0-3
}
console.log(x); // prints 4

for (let i = 0; i < 4; i++) {
    console.log(i); // prints 0-3
}
console.log(i);  // Reference Error - i not defined