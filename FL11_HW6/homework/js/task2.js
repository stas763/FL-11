const a = prompt('Enter values triangle side length A');
const b = prompt('Enter values triangle side length B');
const c = prompt('Enter values triangle side length C');

if (a + b > c && a + c > b && b + c > a) {
    console.log('Normal triangle');
    if ( a === b === c) {
    console.log('Isosceles triangle');
    }
  } else {
    console.log('Triangle doesn’t exist');
  }
