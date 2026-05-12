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

const password = 'p@ssword';
if(password.length>=8){
    console.log('That password is long enough!');
}