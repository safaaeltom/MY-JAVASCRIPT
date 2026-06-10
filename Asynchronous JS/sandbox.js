// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('calback function fired')
// }, 2000);

// console.log(3);
// console.log(4);

// Making an HTTP request

// create a request object (XMLHttpRequest object)
const request = new XMLHttpRequest(); 

// Listen for changes in the request state
request.addEventListener('readystatechange', () =>{

// Run this code when request is complete
if(request.readyState === 4){
    
    // Log the response returned by the API
    console.log(request.responseText);
    }
});

// Make a GET request to a specific API endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// Send the request to the server
request.send();