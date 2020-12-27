export const getMaxDigit = function (startNum){
	let digitArray = String(startNum).split('');
	 let answer = 0;
	 for (let sDigit of digitArray) {
	 	if(Number(sDigit) > answer) {
	 		answer = Number(sDigit)
	 	}; 
	 };
	return answer;
}