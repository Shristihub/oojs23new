function details(){
    console.log(`Student Details`);
    return {
        name:'Sri',city:'Bangalore'
    }
}
let obj = details();
console.log(`Name ${obj.name}`);
console.log(`City ${obj.city}`);

function calcInterest(principal, year,rate){
 let message ="Interest Calculator"
 // like a private function
 function _calculate(){
    let interest = principal*year*rate;
    return interest;
 }
 function showInterest(){
    console.log(`Final Interest : ${_calculate()}`);
 }
 let checkExpiry = function(){
    console.log(`12 months`);
 }
 let printRate = function(){
    return `Rate varies for plans`;
 }
 return {
    mymessage:message,
    printInterest:showInterest, // function
    checkMonth:checkExpiry, // function
    printRate:printRate()  // value

 }
}
let objIns = calcInterest(9000,2,2);
objIns.printInterest();
console.log(`${objIns.mymessage}`);
objIns.checkMonth();
console.log(`${objIns.printRate}`);

