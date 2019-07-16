//0. Write function, which returns array of numbers from string parameter.
let finish = [];

function getNumbers(string) {
  for (let n = 0; n<string.length; n++){
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
