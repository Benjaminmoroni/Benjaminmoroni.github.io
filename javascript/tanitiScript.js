
var w = window.matchMedia("(min-width: 794px)")

w.addEventListener("change", function() {
screenWidth();
});

function introFunction() {
	var x = document.getElementById("more-intro");
	var b = document.getElementById("more-intro-button");
	if (x.className === "hidden") {
		x.className = "toggle";
		b.innerHTML = "Read Less";
	} else {
		x.className = "hidden";
		b.innerHTML = "Read More";
	}
}
		
function faqFunction() {
	var x = document.getElementById("more-FAQ");
	var b = document.getElementById("more-FAQ-button");
	if (x.className === "hidden") {
		x.className = "toggle";
		b.innerHTML = "Read Less";
	} else {
		x.className = "hidden";
		b.innerHTML = "Read More";
	}
}

function screenWidth() {
	var x = document.getElementById("myTopnav");
	var b = document.getElementById("body");
	var a = document.getElementsByClassName("anchor");
	var f = document.getElementById("fishDropdown");
	if (w.matches) {
		x.className = "topnav";
		b.className = "body";
		for (let i = 0; i < a.length; i++) {
		a[i].className = "anchor";
		}
	}
}

function navFunction() {
	var x = document.getElementById("myTopnav");
	var b = document.getElementById("body"); 
	var a = document.getElementsByClassName("anchor");

  if (x.className === "topnav") {
	x.className += " responsive";
	b.className += " display";
	for (let i = 0; i < a.length; i++) {
	a[i].className += " responsive";
	} 
  } else {
	x.className = "topnav";
	b.className = "body";
	for (let i = 0; i < a.length; i++) {
	a[i].className = "anchor";
	} 
  }
}