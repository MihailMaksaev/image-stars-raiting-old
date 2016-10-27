import './main.css' 

console.log("11");

var starSize = 32;


var controlStars = document.getElementById("control_stars");

var controlStarsOffset = controlStars.offsetLeft;

var scrollStars =  controlStars.querySelector("div");

scrollStars.style.width="0px";

controlStars.addEventListener("click", clickOnStar);

controlStars.addEventListener("mouseover", hoverOnStar);

controlStars.addEventListener("mouseout", hoverOutOnStar);


function hoverOnStar(e){
	
    var clickCoord = e.pageX - controlStarsOffset;
	
	scrollStars.style.width = clickCoord+"px";
	
}

function hoverOutOnStar(e){
	
	
	scrollStars.style.width = "0px";
	
}

function clickOnStar(e){
	
	
	var clickCoord = e.pageX - controlStarsOffset;
	
	scrollStars.style.width = clickCoord+"px";
	
	
	console.dir(e.pageX);
	console.dir(clickCoord);
	
	}