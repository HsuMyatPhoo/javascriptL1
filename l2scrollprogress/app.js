// console.log('hey');
var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
	scrollpoint();
}

function scrollpoint(){
	// console.log('i am working');

	var getscrolltop = document.documentElement.scrollTop;
	var getscrollheight = document.documentElement.scrollHeight;
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calheight = getscrollheight- getclientheight;

	// var getfinal = Math.round((getscrolltop *100) / calheight);;
	// // console.log(getfinal);

	var getfinal = Math.round((getscrolltop / calheight ) * 100);
	// console.log(getfinal);
	


	getprogressbar.style.width = `${getfinal}%`;
	// getprogressbar.style.background = 'green';
	console.log(getprogressbar);
}




function printme(){
	window.print();
}






// window.onscroll = function(){
// }
// =>work on scroll


// scrollpoint * 100 ( pjheight - currentheight)
// document.documentElement.scrollTop
// =>give scroll point

// document.documentElement.scrollHeight;
// =>the whole pj height (all padding , margin)

// document.documentElement.clientHeight;
// =>current view height


// window.print()
// print the whole pj