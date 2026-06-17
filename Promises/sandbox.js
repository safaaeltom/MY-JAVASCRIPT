// const getTodos = (resource, callback) =>{

// const request = new XMLHttpRequest(); 
// request.addEventListener('readystatechange', () =>{

// if(request.readyState === 4 && request.status === 200){ 
//     const data = JSON.parse(request.responseText)
//     callback(undefined, data);
//     }else if(request.readyState === 4){
//     callback('could not fetch data', undefined);
//     }
// });

// request.open('GET', resource);
// request.send();
// };

// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });

// // promise example
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // use previous code to fetch something without callback hell part
//         resolve('some data');
//         //reject('some error');
//     });
// };

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err)
// });


// Apply promises to real world example
const getTodos = (resource) =>{

return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest(); 

    request.addEventListener('readystatechange', () =>{

      if(request.readyState === 4 && request.status === 200){ 
        const data = JSON.parse(request.responseText)
        resolve(data);
      } else if(request.readyState === 4){
        reject('error getting resource');
      };
    });

    request.open('GET', resource);
    request.send();
    });
};

// data from single json file
// getTodos('todos/luigi.json').then(data => {
//     console.log('promise resolved:', data);
// }).catch(err => {
//     console.log('promise rejected:', err);
// })


// multiple json files
getTodos('todos/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('todos/luigi.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
})