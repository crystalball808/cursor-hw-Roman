const getMaxDigit = function (startNum){
	let digitArray = String(startNum).split('');
	 let answer = 0;
	 for (let sDigit of digitArray) {
	 	if(Number(sDigit) > answer) {
	 		answer = Number(sDigit)
	 	}; 
	 };
	 return answer;
}
document.writeln(`Функція №1: ${getMaxDigit(prompt('Функція №1: Введіть число'))}<br>`);

const power = function (base, exponent){
	let answer = base;
	for(let i = 0; i < exponent-1;i++){
		answer = answer * base;
	}
	return answer;
}
document.writeln(`Функція №2: ${power(prompt('Функція №2: Введіть основу'),prompt('Функція №2: Введіть степінь'))}<br>`);

const formatName = function (name){
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
document.writeln(`Функція №3: ${formatName(prompt('Функція №3: Введіть ім\'я'))}<br>`);

const change = function (salary) {
	return salary - (salary/100*19.5);
}
document.writeln(`Функція №4: ${change(prompt('Функція №4: Введіть суму заробітньої плати'))}<br>`);

const getRandomNumber = function (firstNum, secondNum) {
	firstNum = Math.ceil(firstNum);
	secondNum = Math.floor(secondNum);
	return Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum;
}
document.writeln(`Функція №5: ${getRandomNumber(prompt('Функція №5: Введіть перше число'), prompt('Функція №5: Введіть друге число'))}<br>`);

const countLetter = function (letter, word) {
	let count = 0;
	for (let i = 0 ; i < word.length ; i++){
		if (word[i] === letter){
			count++;
		}
	}
	return count;
}
document.writeln(`Функція №6: ${countLetter(prompt('Функція №6: Введіть літеру'),prompt('Функція №6: Введіть речення'))}<br>`);

const convertCurrency = function (firstCurrency) {
	let secondCurrency = '';
	if (firstCurrency.slice(-3).toUpperCase() === 'UAH'){
		secondCurrency = Math.round(parseInt(firstCurrency) /	28 * 100) / 100 + '$' ;
	}
	else if (firstCurrency.slice(-1) === '$'){
		secondCurrency = parseInt(firstCurrency) *	28 + 'UAH' ;
	}
	else {
		secondCurrency = 'Error';
	}
	return secondCurrency
}
document.writeln(`Функція №7: ${convertCurrency(prompt('Функція №7: Введіть суму у форматі числоВалюта'))}<br>`);

const getRandomPassword = function (startNum) {
	startNum = + startNum;
	let answer = '';
	if (startNum === 0) startNum = 8;
	for (let i = 0; i<startNum; i++){
		answer+= Math.floor(Math.random()*10);
	}
	return answer;
}
document.writeln(`Функція №8: ${getRandomPassword(prompt('Функція №8: Введіть кількість цифр'))}<br>`);

const deleteLetters = function (letter, word){
	const re = new RegExp(letter,"gi");
	return word.replace(re, '');
}
document.writeln(`Функція №9: ${deleteLetters(prompt('Функція №9: Введіть літеру'),prompt('Функція №9: Введіть слово'))}<br>`);

const isPalyndrom = function (str) {
	let answer;
	str = str.replace(/ /g,'');
	const revStr = str.split('').reverse().join('');
	if (revStr.toLowerCase() === str.toLowerCase()) answer = true;
	else answer = false;
	return answer;
}
document.writeln(`Функція №10: ${isPalyndrom(prompt('Функція №10: Введіть речення'))}<br>`);

const deleteDuplicateLetter = function (str){
	let toDelete = '[';
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++){
		let curLetter = str[i];
		for (let j = i+1; j < str.length; j++){
			if (str[j] === curLetter) {
				toDelete = toDelete + curLetter + ',';
				break;
			}
		}
	}
	toDelete = toDelete + ']';
	const re = new RegExp(toDelete, "g");
	return str.replace(re, '');
}
document.writeln(`Функція №11: ${deleteDuplicateLetter(prompt('Функція №11: Введіть речення'))}<br>`);