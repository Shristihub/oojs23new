// revealing module
// all methods and variables are inside the module
let interestMod = (function(principal, year,rate){
    let _message ="Interest Calculator"
    // like a private function
    function _calculate(){
       let interest = principal*year*rate;
       return interest;
    }
    function _showInterest(){
       console.log(`Final Interest : ${_calculate()}`);
    }
    let _checkExpiry = function(){
       console.log(`12 months`);
    }
    let _printRate = function(){
       return `Rate varies for plans`;
    }
    let _greet =()=>{
        console.log(`Great Day`);
       }
    return {
       mymessage:_message,
       printInterest:_showInterest, // function
       checkMonth:_checkExpiry, // function
       printRate:_printRate(),  // value
       greet:_greet
    }
   })(90000,2,2);
   
   interestMod.printInterest();
   console.log(`${interestMod.mymessage}`);
   interestMod.checkMonth();
   console.log(`${interestMod.printRate}`);
   console.log(`${interestMod.newmessage}`);
   
   