// Object Literals
// js object
let student = {
    studname: 'Kevin',
    department: 'CSE',
    studentId: 10,
    address: {
        city: 'Bangalore',
        state: 'KAR'
    },
    show: function(){
        console.log('Great Day');
    }
}
console.log(student.studname);
console.log(student.address.city);
student.hobbies = ['Music','Sports','Reading']



for(let index in student.hobbies){
    console.log(student.hobbies[index]);
    
}
console.log();
for (const key in student) {
      const value = student[key];
        console.log(value);
    }
