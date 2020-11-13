let startCalc, endCalc;
let answer = 0;

while (true){
	startCalc = +prompt('Від якого числа складати?');
	startCalc = Math.trunc(startCalc);
	if(isNaN(startCalc)){
		console.log('Введіть ціле число!');
		continue;
	}
	break;
}
console.log(startCalc);
while (true) {
	endCalc = +prompt('До якого числа складати?');
	endCalc = Math.trunc(endCalc);
	if(isNaN(endCalc)){
		console.log('Введіть ціле число!');
		continue;
	}
	if(endCalc <= startCalc){
		console.log('Введіть число більше ніж перше!');
		continue;
	}
	break;
}
console.log(endCalc);

const passEven = confirm('Пропускати парні числа?');

for (let i = startCalc; i <= endCalc; i++){
	if (i%2===0 && passEven === false || i%2===1){
		answer += i;
	}
}

console.log('Відповідь: ', answer);
