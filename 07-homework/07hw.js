const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function(salary){
	return +(this.tax * salary).toFixed(2);
}

console.log(getMyTaxes.call(ukraine,9999));

const getMiddleTaxes = function() {
	return +(this.tax * this.middleSalary).toFixed(2);
}

console.log(getMiddleTaxes.call(litva));

const getTotalTaxes = function() {
	return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

console.log(getTotalTaxes.call(latvia));

const getMySalary = function() {
	setInterval(()=>{
		const salary =  Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
		const taxes = +(this.tax * salary).toFixed(2);
		const profit = +(salary - taxes).toFixed(2);
		;
		console.log({
			salary,
			taxes,
			profit
		});
	},10000)
}

getMySalary.call(ukraine);
