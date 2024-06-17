let Laptop = function (model, brand) {
  this.model = model;
  this.brand = brand;
};
let Mobile = function (model, brand, price) {
  this.model = model;
  this.brand = brand;
  this.price = price;
};
let laptop = new Laptop("T5340", "Dell");
let mobile = new Mobile("M22", "Samsung", 20000);
let printDetails = function (accessories, discount) {
  let brand = this.brand;
  console.log(`Name:${this.model}`);
  console.log(`Brand:${this.brand}`);
  console.log(`Accessories:${accessories}`);
  if (brand == "Samsung") {
    console.log(`Accessories:${accessories}`);
    console.log(`Price:${this.price - discount}`);
  }
};
printDetails.call(laptop, "Charger");
printDetails.call(mobile, "Screen Guard", 2000);

printDetails.apply(laptop, ["Charger"]);
printDetails.apply(mobile, ["Screen Guard", 2000]);
