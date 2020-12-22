function* createIdGenerator(){
	let id = 0;
	while(true){
		yield ++id;
	}
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerator(start){
	let size = start;
	while (true) {
		const char = yield size;
		if(char === 'up'){
			size+=2;
		}
		else if(char === 'down'){
			size-=2;
		}
	}
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next('up').value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('down').value);
console.log(fontGenerator.next('down').value);

const testText = document.querySelector('#test-text');
const timer = setInterval(()=>{
	testText.style.fontSize = `${fontGenerator.next('up').value}px`;
},2000)

setTimeout(()=>clearInterval(timer),10000);
