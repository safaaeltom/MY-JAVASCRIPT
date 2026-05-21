// Object literals
let user = {  // This ia an object
    name: 'crystal', // This property is a key value pair
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
};

console.log(user);
console.log(user.name);
console.log(user['name']);

user['name'] = 'safiloo'
console.log(user['name'])

user.age = 35;
console.log(user.age);

console.log(typeof user);

