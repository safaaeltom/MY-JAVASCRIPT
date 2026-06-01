const book = document.querySelector('li:first-Child .name')
undefined
book
// <span class=​"name">​Name of the Wind​</span>​


// get attribute in console
book.getAttribute('class')
// "name"
book.getAttribute('href')
// null


// set attribute in console
book.setAttribute('class', 'title')
//undefined
book
// <span class=​"title">​Name of the Wind​</span>​

// check specific attribute in console
book.hasAttribute('class')
// true
book.hasAttribute('href')
// false

// remove attribute in console
book.removeAttribute('class')
//undefined
book
// <span>Name of the Wind</span>
book.setAttribute('class', 'name')
//undefined
book
// <span class=​"name">​Name of the Wind​</span>​


