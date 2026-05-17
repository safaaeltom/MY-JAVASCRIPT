// let people = ['mario', 'luigi', 'ryu', 'shaun'];

// people.forEach(person=>{
//     console.log(person);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun'];

// people.forEach((person, index)=>{
//     console.log(index, person);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// example for the forEach method
const ul = document.querySelector('.people');
const people = ['mario', 'luigi', 'ryu', 'shaun'];

let html = ``;

people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;