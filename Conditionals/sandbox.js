// 1. FOR LOOPS //

// for(let i=0; i<5; i++){ 
//     console.log('in loop:', i);
// }

// const names = ['shaun', 'mario', 'luigi'];
//  for (let i=0; i<names.length; i++){
//     console.log(names[i]);

// let html = `<div>${names[i]}</div>`;
// console.log(html);
// }

// 2. WHILE LOOPS // <evaluates the condition before running the code

// let i=0
// while(i<5){ 
//      console.log('in loop:', i);
//      i++;
// }

// 3. DO WHILE LOOPS <<runs the code regardless the condition then evaluates the condition

// let i=5
//   do{ 
//     console.log('value of i is:', i);
//     i++;
//   } while(i<5);

// 4. IF STATEMENTS

// const age = 15;

// if (age <= 18){
//     console.log('You are a minor');
// }

// const ninjas = ['shaun', 'ryu', 'shaun-li', 'yoshi'];
// if (ninjas.length >4){
//     console.log("That's a lot of ninjas")
// }

// const password = 'p@ssword';
// if(password.length>=8){
//     console.log('That password is long enough!');
// }

// ELSE IF STATEMENTS

// const password = 'p@ss123';

// if(password.length>=12){
//     console.log('Your password is mighty strong');
// } else if(password.length>=8){
// console.log('That password is long enough!');
// } else {
// console.log('password is not long enough');
// }

// LOGICAL OPERATORS - OR || and AND &&

// const password = 'p@ie';

// if(password.length>=12 && password.includes('@')){
//     console.log('Your password is mighty strong');
// } else if(password.length>=8 || password.includes('@')){
// console.log('That password is strong enough!');
// } else {
// console.log('password is not strong enough');
// }

// LOGICAL NOT (!)

// let user = false;
// if(!user){
//   console.log('You must be logged in to continue!');
// }
// console.log(!true);
// console.log(!false);

const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i=0; i<scores.length; i++){
  if(scores[i]===0){
    continue;
  }

  console.log('Your score: ', scores[i]);

  if(scores[i]===100){
    console.log('Congrats, you got the top score!');
    break;
  };
}
