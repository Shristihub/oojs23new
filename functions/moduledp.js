let interestMod = (function(principal, year,rate){
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
       printRate:printRate(),  // value
       greet:()=>{
        console.log(`Great Day`);
       },
       newmessage:'GoodBye'
   
    }
   })(90000,2,2);
   
   interestMod.printInterest();
   console.log(`${interestMod.mymessage}`);
   interestMod.checkMonth();
   console.log(`${interestMod.printRate}`);
   console.log(`${interestMod.newmessage}`);
   interestMod.newmessage();
   
   