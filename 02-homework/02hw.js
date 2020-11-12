let n, m;
let answer = 0;

while (true){
	n = +prompt('Від якого числа складати?');
	n = Math.trunc(n);
	if(isNaN(n)){
		console.log('Введіть ціле число!');
		continue;
	}
	break;
}
console.log(n);
while (true) {
	m = +prompt('До якого числа складати?');
	m = Math.trunc(m);
	if(isNaN(m)){
		console.log('Введіть ціле число!');
		continue;
	}
	break;
}
console.log(m);

const passEven = confirm('Пропускати парні числа?');

for (let i = n; i <= m; i++){
	if (i%2===0 && passEven === false || i%2===1){
		answer += i;
	}
}

console.log('Відповідь: ', answer);
