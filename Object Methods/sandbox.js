// Object methods
// let user = {  // This ia an object
//     name: 'crystal', // This property is a key value pair
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//     login: function(){
//         console.log('The user logged in');
//     },
//     logout: function(){
//         console.log('The user logged out');
//     }
// };

// user.login(); // This is a method which is a function
// user.logout();

// const name = 'mario';
// name.toUpperCase(); // This is a method which is a function

// (THIS) a method to print out all blogs in the array
let user = {  // This ia an object
    name: 'crystal', // This is a property (a key value pair)
    email: 'crystal@thenetninja.co.uk',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    logBlogs(){
        //console.log(this.blogs);
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog);
        })
    }
};

user.logBlogs();
console.log(this);