export const getMySalary = function() {
		const salary =  Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
		const taxes = +(this.tax * salary).toFixed(2);
		const profit = +(salary - taxes).toFixed(2);
		;
		console.log({
			salary,
			taxes,
			profit
		});
}
