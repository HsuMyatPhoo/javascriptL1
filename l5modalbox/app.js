var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnclose = document.querySelector('.btn-close')
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');

getbtnsignup.addEventListener('click',function(){
	getmodal.style.display = 'block';
})

getbtnclose.addEventListener('click',function(){
	getmodal.style.display = 'none';
});


window.onclick = function(e){
	// console.log(e.target);

	if(e.target === getmodal){
		getmodal.style.display = 'none';
	}
}

var getde = document.documentElement;

getbtnfullscreen.addEventListener('click',function(){

	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msRequestFullscreen){
		getde.msRequestFullscreen();
	}else if(getde.webkitRequestFullscreen){
		getde.webkitRequestFullscreen()
	}

	getbtnclosescreen.style.display = 'inline-block';
});



getbtnclosescreen.addEventListener('click',function(){
	// document.exitFullscreen();

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}

	getbtnclosescreen.style.display = 'none';

})


// document.documentElement.requestFullscreen()
// =>make full screen
// document.documentElement.msrequestFullscreen()
// =>make full screen for Microsoft (internet Explorer)
// document.documentElement.requestFullscreen()
// =>make full screen for chrome 0r saffarie


// document.exitFullscreen();
// =>for exit from fullscreen

// HW
// open fullscreen  click mr key htae mr

// local storage mr save lote ml
// local storage mr reload ma lote ma chin open full screeen phyt ny ml bl lo bl reload lote lote
