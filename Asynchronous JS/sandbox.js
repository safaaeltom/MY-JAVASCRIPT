// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('calback function fired')
// }, 2000);

// console.log(3);
// console.log(4);

// Making an HTTP request

// // create a request object (XMLHttpRequest object)
// const request = new XMLHttpRequest(); 

// // Listen for changes in the request state
// request.addEventListener('readystatechange', () =>{

// // Run this code when request is complete
// if(request.readyState === 4){
    
//     // Log the response returned by the API
//     console.log(request.responseText);
//     }
// });

// // Make a GET request to a specific API endpoint
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// // Send the request to the server
// request.send();

// // Handle XHR completion and check successful responses
// const request = new XMLHttpRequest(); 
// // Listen for changes in the request state
// request.addEventListener('readystatechange', () =>{

// // Run this code when request is complete
// if(request.readyState === 4 && request.status === 200){ // Request finished and successful
    
//     // Log the response returned by the API
//     console.log(request, request.responseText);
//     }else if(request.readyState === 4){
//         console.log('could not fetch the data')
//     }
// });

// // Make a GET request to a specific API endpoint
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// // Send the request to the server
// request.send();

//
// const getTodos = () =>{

// // Request logic wrapped
// const request = new XMLHttpRequest(); 
// // Listen for changes in the request state
// request.addEventListener('readystatechange', () =>{

// // Run this code when request is complete
// if(request.readyState === 4 && request.status === 200){ // Request finished and successful
    
//     // Log the response returned by the API
//     console.log(request, request.responseText);
//     }else if(request.readyState === 4){
//         console.log('could not fetch the data')
//     }
// });

// // Make a GET request to a specific API endpoint
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// // Send the request to the server
// request.send();
// };

// getTodos();


// const getTodos = (callback) =>{

// const request = new XMLHttpRequest(); 
// request.addEventListener('readystatechange', () =>{

// if(request.readyState === 4 && request.status === 200){ 
//     callback(undefined, request.responseText);
//     }else if(request.readyState === 4){
//     callback('could not fetch data', undefined);
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();
// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
//     // console.log('callback fired');
//     // console.log(err, data);
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);


const getTodos = (resource, callback) =>{

const request = new XMLHttpRequest(); 
request.addEventListener('readystatechange', () =>{

if(request.readyState === 4 && request.status === 200){ 
    const data = JSON.parse(request.responseText)
    callback(undefined, data);
    }else if(request.readyState === 4){
    callback('could not fetch data', undefined);
    }
});

request.open('GET', resource);
request.send();
};

getTodos('todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('todos/shaun.json', (err, data) => {
            console.log(data);
        });
    });
});


