var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/punisher-logo.jpg') {
	  myImage.setAttribute ('src','images/gon-freaks.jpg');
	} else {
	  myImage.setAttribute ('src','images/punisher-logo.jpg');
	}
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
	
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Punisher rocks, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Punisher rocks, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
