// const Moment = require('moment');

// const a = new Moment();
// console.log(a.format('h:mm:ss a'));
// console.log('L plus ratio');

// function scopeFunction() {
//     let myVar = 'apple';
//     return myVar;
//   }
  
//   scopeFunction();
//   console.log(myVar);

let myGlobalVar = "";

function scopeFunction() {
	let myVar = "apple";
	return myVar;
}

myGlobalVar = scopeFunction();
console.log(myGlobalVar);
