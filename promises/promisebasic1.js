// synchronous
function getUsers() {
    let users = [
        { username: 'Raju', city: 'Ooty', userId: 10 },
        { username: 'Roni', city: 'Chennai', userId: 11 },
        { username: 'Rohan', city: 'Bangalore', userId: 12 },
    ]
    return users;
}

// asynchronous
function getAllUsers() {
    let users = [];
    setTimeout(() => {
        users = [
            { username: 'Raju', city: 'Ooty', userId: 10 },
            { username: 'Roni', city: 'Chennai', userId: 11 },
            { username: 'Rohan', city: 'Bangalore', userId: 12 },
        ]
    }, 3000);
    return users;
}

function findById(userid) {
    // return getUsers().find(user => user.userId == userid)
    return getAllUsers().find(user => user.userId == userid)
}
console.log(findById(12));


// Using Promise
// function returns a promise
function getAll() {
    let promise = new Promise((resolve, reject) => {
        let users = []; let x = 10;
        setTimeout(() => {
            if (x > 1) {
                users = [
                    { username: 'Raju', city: 'Ooty', userId: 10 },
                    { username: 'Roni', city: 'Chennai', userId: 11 },
                    { username: 'Rohan', city: 'Bangalore', userId: 12 },
                ]
                resolve(users);
            } else {
                reject('Error');
            }
        }, 3000);
    });
    return promise;
}
// use the promise in other functions
// promise.then will not return
function getById(userid) {
    getAll().then((users) => {
        let user = users.find(user => user.userId == userid)
        console.log(user);
    }, () => "error");
}
getById(12);

function getOne(userid) {
    getAll().then((users) => {
        let user = users.find(user => user.userId == userid)
        console.log(user);
    }).catch(error => {
        console.log('catch error' + error);
    }).finally(() => {
        console.log('called in both cases');
    })
}
getOne(10)