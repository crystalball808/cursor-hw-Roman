const kickSound = new Audio('808_drumkit/kick.wav');
const clapSound = new Audio('808_drumkit/clap.wav');
const snareSound = new Audio('808_drumkit/snare.wav');
const hihatSound = new Audio('808_drumkit/hihat.wav');
const openSound = new Audio('808_drumkit/openhat.wav');
const bassSound = new Audio('808_drumkit/bass.wav');

const panel =document.querySelector('#panel');
const allButtons = document.querySelectorAll('.instrument');
const kickButton = document.querySelector('#kick');
const clapButton = document.querySelector('#clap');
const snareButton = document.querySelector('#snare');
const hihatButton = document.querySelector('#hihat');
const openButton = document.querySelector('#open-hihat');
const bassButton = document.querySelector('#bass');

document.addEventListener('keydown',function(e){
	allButtons.forEach( function(button) {
		button.style.borderColor = 'white';
	});
	switch (e.code) {
		case 'KeyA':
			console.log('kick');
			kickButton.style.borderColor = 'orange';
			kickSound.play();
			break;
		case 'KeyS':
			console.log('clap');
			clapButton.style.borderColor = 'orange';
			clapSound.play();
			break;
		case 'KeyD':
			console.log('snare');
			snareButton.style.borderColor = 'orange';
			snareSound.play();
			break;
		case 'KeyF':
			console.log('hihat');
			hihatButton.style.borderColor = 'orange';
			hihatSound.play();
			break;
		case 'KeyG':
			console.log('open');
			openButton.style.borderColor = 'orange';
			openSound.play();
			break;
		case 'KeyH':
			console.log('bass');
			bassButton.style.borderColor = 'orange';
			bassSound.play();
			break;
		default:
			console.log('hmm..?')
			break;
	}
});

panel.addEventListener('click',function(e){
	allButtons.forEach( function(button) {
		button.style.borderColor = 'white';
	});
	e.target.style.borderColor = 'orange';
	switch(e.target.id){
		case 'kick':
			console.log('kick');
			kickSound.play();
			break;
		case 'clap':
			console.log('clap');
			clapSound.play();
			break;
		case 'snare':
			console.log('snare');
			snareSound.play();
			break;
		case 'hihat':
			console.log('hihat');
			hihatSound.play();
			break;
		case 'open-hihat':
			console.log('open');
			openSound.play();
			break;
		case 'bass':
			console.log('bass');
			bassSound.play();
			break;
		default:
			console.log('hmm..?')
			break;
	}
})