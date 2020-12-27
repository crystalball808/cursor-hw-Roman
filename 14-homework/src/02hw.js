export const calcSum = (startCalc, endCalc, passEven)=>{
	let answer = 0;
	for (let i = startCalc; i <= endCalc; i++){
		if (i%2===0 && passEven === false || i%2===1){
			answer += i;
		}
	}

	return answer;
}