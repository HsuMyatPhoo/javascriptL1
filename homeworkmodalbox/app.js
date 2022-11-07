var signup = document.getElementById('signup');
var fullscreen = document.getElementById('fullscreen');
var normalscreen = document.getElementById('normalscreen');
var close = document.querySelector('.close');
var modalbox = document.querySelector('.modal');
const doc = document.documentElement;




function fullscreenactive(){
	const doc = document.documentElement;
	doc.requestFullscreen();

	normalscreen.style.display = 'inline-block';
	console.log(localStorage.getItem('fullscreen'));
	localStorage.setItem('fullscreen','open');	
}


function normalscreenactive(){
	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}

	localStorage.setItem('fullscreen','close');
	normalscreen.style.display = 'none';
}


function formsubmit(e){
	e.preventDefault();
	const newname = document.querySelector('#user').value;
	const newemail = document.querySelector('#email').value;
	const newpassword = document.querySelector('#password').value;
	localStorage.setItem('name',newname);
	localStorage.setItem('email',newemail);
	localStorage.setItem('psw',newpassword);

	document.querySelector('#user').value ="";
	document.querySelector('#email').value = '';
	document.querySelector('#password').value= '';

	modalbox.style.display = 'none';
	// console.log('fullscreen submitted');
}


// =>Submit
var register = document.querySelector('.register')
// console.log(register);
register.addEventListener('click',function(e){
	formsubmit(e);
	
});


signup.addEventListener('click',function(){
	modalbox.style.display = 'block';

});

close.addEventListener('click',function(){
	modalbox.style.display = 'none'
});

window.onclick = function(e){
	if(e.target === modalbox){
		modalbox.style.display = 'none'
	}
	
}







// var normalheight = screen.height;
// var fullheight  = window.innerHeight;
// var scrollheight = document.documentElement.scrollHeight;
// var clientHeight = document.documentElement.clientHeight;

function disablekey(){
	if(localStorage.getItem('fullscreen') === 'open'){
		document.onkeydown =function(e){
			if(e.keyCode == 116 ){
				normalscreen.style.border = "1px solid red"
				return false
			}else{
				normalscreen.style.border = 'none';
				return true
			}
			e.preventDefault();
		}
	}
}	
	
// var answer = localStorage.key(1);
// console.log(answer);

// document.addEventListener('keydown', function(e){
// 	var charCode = e.charCode || e.keyCode || e.which;
// 	if(charCode === 27){
// 		return false
// 	}else{
// 		console.log(charCode)
// 	}
// });


// =>Start screen
fullscreen.addEventListener('click',function(e){
	fullscreenactive();
	disablekey();
	console.log(localStorage);

});

normalscreen.addEventListener('click',function(){
	normalscreenactive();
});

// =>End screen






    

   
