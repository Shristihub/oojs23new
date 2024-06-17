//  create an array of mobile objects
var mobiles=[
    { model:'A123',brand:'Samsung',price:20000},
    { model:'B123',brand:'Samsung',price:20000},
    { model:'M12',brand:'Vivo',price:8000}
]
var laptops=[
    { model:'T2340',brand:'Dell',price:200000},
    { model:'T420',brand:'Lenova',price:130000},
    { model:'X200',brand:'Lenova',price:18000}
]

function details(amount){
    console.log(`Model ${this.model}`);
    console.log(`Price ${this.price}`);
    console.log(`Brand ${this.brand}`);
    console.log(`Discounted Price ${this.price-amount}`);
}

mobiles.forEach(mobile => {
    details.call(mobile,1000);
});
laptops.forEach(laptop=>{
    details.apply(laptop,[2000]);
})

let num1 = [1,2,3,4,5,6,7,8]
let num2 = [91,92,83,84,65,86,74,88]


