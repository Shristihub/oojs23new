let menuDetails = (username,type)=>{
    let vegFood = ['Sambhar','Idli','Dosa']
    let nonvegFood = ['Chicken Biryani','Fish Curry','Chicken Fry']
    console.log(`Welcome ${username}`);
    if(type=='veg'){
        for (const food of vegFood) {
            console.log(`Veg: ${food}`);
        }
    }else if(type=='nonveg'){
        for (const food of nonvegFood) {
            console.log(`NonVeg: ${food}`);
        }
    }else{
        console.log(`Enjoy Fasting`);
    }
}
menuDetails('Sri','nonveg');
menuDetails('Raju','veg');
menuDetails('Jo','other');