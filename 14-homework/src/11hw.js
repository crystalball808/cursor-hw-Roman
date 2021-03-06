export const makeChinaChar = ()=>{
	return new Promise((resolve)=>{
		const now = Date.now().toString();
		const charCode = now.slice(now.length-5);
		resolve(String.fromCharCode(charCode));
	})
}

export async function getRandomChinese (length){
	let chars ='';
	const now = Date.now();
	const asyncChinaChar = () =>new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(makeChinaChar());
			},50)
		})
	for(let i = 0; i < length; i++){
		chars += await asyncChinaChar();
	}
	return `${chars} after ${Date.now()-now}ms`;
}

