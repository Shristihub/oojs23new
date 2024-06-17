const employees=[
    {
        name:'Aditya',
        department:{
            deptname:'Sales',
            depthead:'Sourav',
            skills:['communication','raport-building']
        },
        city:'hyderabad'
    },
    {
        name:'Vicky',
        department:{
            deptame:'Development',
            depthead:'Aayush',
            skills:['java','angular']
        },
        city:'chennai'
    },
    {
        name:'Naveen',
        department:{
            deptname:'QA Engineer',
            depthead:'Sumit'
        },
        skills:['Automation testing','manual testing'],
        city:'pune'
    }
]

employees.forEach(employee => {
  // var employee = employees[i];
    for(const key in employee){
        var prop = employee[key];
        if(Array.isArray(prop))
            for(const val of prop)
             console.log(key,val);
        else if(typeof(prop)=='object')
            for(const i in prop)
                console.log(i,prop[i]);
        else
            console.log(key,prop);

    }
});
