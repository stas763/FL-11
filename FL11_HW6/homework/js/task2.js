const a = prompt('Enter values triangle side length A');
const b = prompt('Enter values triangle side length B');
const c = prompt('Enter values triangle side length C');

if (a + b > c && a + c > b && b + c > a) {
    console.log('Normal triangle');
  }
