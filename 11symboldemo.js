
//Symbol  is a new Primitive type
let statuss = Symbol('OPEN');
console.log(statuss);

console.log(Symbol()==Symbol()); // false

let errorcode = Symbol('InternalError');
let successcode = Symbol('Success');
console.log(errorcode);
console.log(successcode);


// checks in global symbol registry
// if available returns the existing symbol
// if not creates a new symbol and adds to a registry
let stat = Symbol.for('OPEN');
console.log(stat);
// get the symbol for the key
console.log(Symbol.keyFor(stat));


let codes = {
    SERVER_ERROR:Symbol('Internal Error'),
    SUCCESS_CODE:Symbol('Success'),
    CLIENT_ERROR:Symbol('Not Found')
}

console.log(codes.CLIENT_ERROR);
