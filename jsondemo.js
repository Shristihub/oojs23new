// javascript object
let employee = { name: 'Raj', city: 'Bangalore' }

// convert to JSON
let jsonString = JSON.stringify(employee);
console.log(jsonString);

//jsonstring
let jsonmobile = `{
    "model": "A123",
    "brand": "Samsung",
    "price": 91000,
    "features": ["OS", "Speakers"]
}`;
//convert to javascript object
let mobile = JSON.parse(jsonmobile);
console.log(mobile.brand);
console.log(mobile.model);
console.log(mobile.price);
mobile.features.forEach(feature => console.log(feature));