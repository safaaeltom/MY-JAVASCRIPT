// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'ninjas are awsome!'; // changes inner text for webpage

// const paras = document.querySelectorAll('p');
// paras.forEach(para=>{
//     console.log(para.innerText);
//     para.innerText += ' new text'; // changes inner text for webpage
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2> THIS IS A NEW H2</h2>'

const content = document.querySelector('.content');
const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person=>{
    content.innerHTML += `<p>${person}</p>`;
})
