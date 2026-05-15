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
// const speak = function(){
//     console.log('Good day!');
// };

// greet();
// greet();

// function greet(){
//     console.log('Hello there');
// }

// ARGUMENTS & PARAMETERS
// const speak = function(){
//     console.log('good day!');
// };

// speak();

// const speak = function(name){
//   console.log(`good day ${name}!`);
// };

// speak('Mario');

// const speak = function(name, time){
//    console.log(`good ${time} ${name}!`);
// };

// speak('Mario', 'morning');

// const speak = function(name='luigi', time='night'){
//    console.log(`good ${time} ${name}!`);
// };

// speak();
// speak('shaun');
// speak('shaun', 'morning');

// RETURNING VALUES (to reuse a value)
// const calcArea = function(radius){
//     return 3.14*radius**2;
// };
// const area = calcArea(10);
// console.log('Answer is: ', area);

// REGULAR FUNCTION
// const calcArea = function(radius){
//     return 3.14*radius**2;
// };
// const area = calcArea(10);
// console.log('Answer is: ', area);

// ARROW FUNCTION
// const calcArea = (radius) => 3.14*radius**2;

// const area = calcArea(10);
// console.log('Answer is: ', area);

// ARROW FUNCTION EXERCISE
// const bill = function(products, tax){
//     let total=0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2));

// << THIS WILL GIVE:
// const bill = (products, tax) => {
//     let total=0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2));