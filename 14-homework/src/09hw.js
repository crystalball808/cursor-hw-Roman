export const createSquares= function(){
	const canvas =  document.querySelector('#canvas');
	canvas.innerHTML = '';
	canvas.style.display = 'table';
	const canvasSize = 5;
	for(let i = 0; i<canvasSize;i++){
		const row = document.createElement('div');
		for(let i = 0; i<canvasSize;i++){
		const square = document.createElement('div');
		const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
	    square.style.background = randomColor;
	    square.style.width = '50px';
	    square.style.height = '50px';
	    square.style.display = 'table-cell';
		row.append(square);
		}
		canvas.append(row);
	}
}