// FUNCTION DECLARATION
// function greet(){
//     console.log('Hello there');
// }

// greet();
// greet();


// FUNCTION EXPRESSION
// function greet(){
//     console.log('Hello there');
// }
// const speak = function(){
//     console.log('Good day!');
// };

// speak();
// speak();

// JS HOISTING WORKS ONLY WITH FUNCTION DECLARATION
const speak = function(){
    console.log('Good day!');
};

greet();
greet();

function greet(){
    console.log('Hello there');
}