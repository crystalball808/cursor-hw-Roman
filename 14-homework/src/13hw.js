export function* createIdGenerator(){
	let id = 0;
	while(true){
		yield ++id;
	}
}

