//0. Write function, which returns array of numbers from string parameter.
let one = 1;
let two = 2;
let three = 3;
let five = 5;

function getNumbers(string) {
  let finish = [];
  for (let n = 0; n < string.length; n++){
    if (!isNaN(+string[n])){
      finish [finish.length] = parseInt(string[n]); n++;
    }
  }
  return finish;
}


// returns []
console.log(getNumbers('string'));
 // returns [1,3,9,5]
console.log(getNumbers('n1um3ber95'));

// 1. Write a function that could receive different amount of parameters (n1, n2, ...n) that have different data types (string, number, boolean, etc.) and returns an object where keys are data types of received parameters and value are their count.

function findTypes(...arg){
  let result={};
  for(let n = 0; n < arg.length; n++){
    if (arg[n] === null) {
      result[typeof arg[n]] = 1;
    } else if (!isNaN(arg[n])) {
      result[typeof arg[n]] = +arg[n].toString();
    } else if (typeof arg[n] === 'boolean') {
      result.boolean = 1;
    } else {
      result[typeof arg[n]] = arg[n].length;
    }
  }
  return result;
}

//returns{'string':1}
console.log(findTypes('number'));
//returns{'object':1, 'number':1, 'string':1}
console.log(findTypes(null, five, 'hello'));

// 2. Write function, which iterates over array and executes function on each element.


function executeforEach(array, func) {
  for (let n = 0; n < array.length; n++){
    func(array[n]);
  }
}


 // logs 1 2 3
executeforEach([one,two,three], function(el) {
console.log(el)
});
