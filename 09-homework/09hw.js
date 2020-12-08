const createSquares= function(){
	document.body.childNodes[2].remove();
	const canvas =  document.createElement('div');
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
	document.body.append(canvas);
}

setInterval(createSquares,1000);