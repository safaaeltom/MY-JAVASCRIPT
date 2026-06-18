// fetch API

fetch('todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});



// // real world pages
// fetch('medicines.json') // fetch data
//     .then(response => response.json()) // convert response to json
//     .then(data => {
//         displayMedicines(data); // use data
//     });

// // real world application <ul class="todos"></ul> in html
// fetch('todos.json')
//     .then(response => response.json())
//     .then(data => {

//         const ul = document.querySelector('.todos');

//         data.forEach(todo => {
//             ul.innerHTML += `<li>${todo.text}</li>`;
//         });

//     });

// async await data fetching
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    const data = await response.json();
    return data;
};

console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('resolved:', data));

console.log(3);
console.log(4);