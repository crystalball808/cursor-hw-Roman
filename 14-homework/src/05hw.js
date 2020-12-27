export const getAverage = function (...numbers){
	const sum = numbers.reduce((sum, number)=>{
		sum+=number;
		return sum;
	},0)
	return sum/numbers.length;
}