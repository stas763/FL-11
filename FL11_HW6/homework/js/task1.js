const a1 = prompt('Enter values x for point A');
const a2 = prompt('Enter values y for point A');
const b1 = prompt('Enter values x for point B');
const b2 = prompt('Enter values y for point B');
const c1 = prompt('Enter values x for point C');
const c2 = prompt('Enter values y for point C');

const HALF = 2;

const isMidpoint = (parseInt(a1, 10) + parseInt(b1, 10)) / HALF === parseInt(c1, 10)
&& (parseInt(a2, 10) + parseInt(b2, 10)) / HALF === parseInt(c2, 10);

console.log('Middle point result: ' + isMidpoint);
