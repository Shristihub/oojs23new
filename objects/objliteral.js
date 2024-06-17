let employee={
    name:'Joe',
    age:20,
    hobbies:['sports','music'],
    address:{
        city:'Bangalore',
        state:'KAR'
    },
    mobile:8973904730
};
console.log(employee);
console.log(employee.name);
console.log(employee.address.city);

for (const key in employee) {
    var prop = employee[key];
    // check if key is an Array
   if(Array.isArray(prop)){
       for(const index in prop)
        console.log(key,prop[index]);
   }
   if(typeof(prop)=='object'){// check if key ia an object
        for(const value in prop)
            console.log(key,prop[value]);
   }else
     console.log(key,prop);
}


