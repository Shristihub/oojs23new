// using array
function calculate(arr){
    var sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    console.log(sum);
}

calculate([90,80]);
calculate([20,80,70,90]);
calculate([90,80,70,20]);
calculate([90,80,70]);

// using arguments
function calculate(){
    console.log('length',arguments.length);
    var sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        sum+=arguments[index];
    }
    console.log(sum);
}

calculate(90,80);
calculate(20,80,70,90);
calculate(90,80,70,20);
calculate(90,80,70);