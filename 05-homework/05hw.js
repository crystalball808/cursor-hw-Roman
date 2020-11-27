
const arrToInt = function (arr){
	return arr.map((number)=>parseInt(number));
}

const getRandomArray = function (length, min, max){
	let result = [];
	for (let i = 0; i < length; i++){
		result.push(Math.floor(Math.random()*(max-min+1))+min);
	}
	return result;
}

const arrayOfRandom = getRandomArray(
	+prompt('Введіть довжину масиву:'),
	+prompt('Введіть мінімальне число:'),
	+prompt('Введіть максимальне число:'));

console.log(`Масив випадкових чисел: ${arrayOfRandom}`);

const getModa = function (...numbers) {
	const iModa = numbers.reduce((iModa, number, index, arr)=>{
		let counter = 1;
		for (let i = index+1; i< arr.length; i++){
			if (arr[i] === number){
				counter++
			}
		}
		iModa.push(counter);
		return iModa;
	},[]);
	const indexOfModa = iModa.findIndex((element) => element === Math.max(...iModa));
	return numbers[indexOfModa];
};

const numbersModa = arrToInt(prompt('getModa: Введіть числа через пробіл').split(' '));
const moda = getModa(...numbersModa);
console.log(`Мода: ${moda}`);

const getAverage = function (...numbers){
	const sum = numbers.reduce((sum, number)=>{
		sum+=number;
		return sum;
	},0)
	return sum/numbers.length;
}

const numbersAverage = arrToInt(prompt('getAverage: Введіть числа через пробіл').split(' '));
const average = getAverage(...numbersAverage);
console.log(`Середнє число: ${average}`);

const getMedian = function (...numbers){
	let index;
	numbers.sort((a,b)=> a-b);
	if(numbers.length%2===1){
		return numbers[Math.floor(numbers.length/2)];
	}
	else{
		return (numbers[numbers.length/2]+(numbers[numbers.length/2-1]))/2;
	}
	
}

const numbersMedian = arrToInt(prompt('getMedian: Введіть числа через пробіл').split(' '));
const median = getMedian(...numbersMedian);
console.log(`Медіана: ${median}`);

const filterEvenNumbers = function (...numbers){
	evenNumbers = numbers.filter((number)=>number%2 === 1);
	return evenNumbers;
}

const numbersEven = arrToInt(prompt('filterEvenNumbers: Введіть числа через пробіл').split(' '));
const oddNumbers = filterEvenNumbers(...numbersEven);
console.log(`Результат фільтрації: ${oddNumbers}`);

const countPositiveNumbers = function (...numbers){
	const quantity = numbers.reduce((quantity, element, index, array)=>{
		if (element>0) quantity++;
		return quantity;
	},0);
	return quantity;
}

const allNumbers = arrToInt(prompt('countPositiveNumbers: Введіть числа через пробіл').split(' '));
const positiveQuantity = countPositiveNumbers(...allNumbers);
console.log(`Кількість позитивних чисел: ${positiveQuantity}`)

