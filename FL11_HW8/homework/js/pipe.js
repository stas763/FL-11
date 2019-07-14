let addOne = (n) => n + 1;

function pipe(n) {
for (let i = 1; i < arguments.length; i++) {
		n = arguments[i](n);
	}
	return n;
}
pipe(1, addOne, addOne);
