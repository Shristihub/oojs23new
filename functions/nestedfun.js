//nested function
var average = function(m1,m2,m3){
    var message = "The sum is";
    // inner function
    function sum(){
        //access the outer function variables
        console.log(message);
        return m1+m2+m3;
    }
    var total = sum()/3;
    console.log(total);
}
average(90,80,90);

var average1 = function(m1,m2,m3){
    var message = "The average is";
    // IIFE
    var total = (function(){
        //access the outer function variables
        console.log(message);
        return m1+m2+m3;
    })()/3;
    console.log(total);
}
average1(90,90,90);

// function returning another function
var average2 = function(m1,m2,m3){
 
    return function (){
        return m1+m2+m3;
    };
}
var avg2 = average2(90,90,90);// returns a fun
console.log(avg2()/3);

var avg2 = average2(90,90,90)(); // returns the sum
console.log(avg2/3);


var showDetails = function(fname,lname){
    let message ="have a great day";
    return function(){
        console.log(`${message}`);
        console.log(`${fname.toUpperCase()}+ ${lname.toUpperCase()}`);
    };
}
var result = showDetails("baba","sri harsha");
result();
showDetails("baba","sri harsha")();

var empdetails = function(empname,city,salary){
    console.log(`welcome ${empname} from ${city}`)
    return function(amount){
        console.log('calculating bonus');
        let bonus = amount*salary;
        return bonus; 
    }
}
var details = empdetails('Priya','Ban',9000);
var bonus = details(300);
console.log(bonus);


var bonus = empdetails('Priya','Ban',9000)(3000);

