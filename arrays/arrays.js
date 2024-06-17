var names = ["Akash","Sandeep","Madhu","Baba","Shravani"];

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
    
}
console.log("....... ");
for (const index in names) {
    const element = names[index];
    console.log(element);
}
console.log(" .........");

for(const value of names){
    console.log(value);
}
console.log(" ........");

names.fo

















for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}

//for in
for (const index in names) {
    console.log(names[index]);
}
// for of
for(const value of names){
    console.log(value);
}
names.forEach(function(value,index,arrName){
    console.log(value+"\t"+index+"\t"+arrName[index]);
})
// using lambda expression
names.forEach((value)=>{
    console.log(value);
})

