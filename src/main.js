import './main.css' 

var starSize = 32;

var olrRaiting = 0.6;
var numGlobalClick = 3;

var controlStars = document.getElementById("control_stars");

var controlStarsOffset = controlStars.offsetLeft;

var scrollStars =  controlStars.querySelector("div");

scrollStars.style.width="0px";

controlStars.addEventListener("click", clickOnStar());

controlStars.addEventListener("mouseover", hoverOnStar);

controlStars.addEventListener("mouseout", hoverOutOnStar);


function hoverOnStar(e){
	
    var clickCoord = e.pageX - controlStarsOffset;
	
	scrollStars.style.width = clickCoord+"px";
	
}

function hoverOutOnStar(e){
	
	
	scrollStars.style.width = "0px";
	
}
function clickOnStar(){
	
	var numClick = 0;
	
	return function (e){

		if(numClick == 0){
		
		
		
			controlStars.removeEventListener("mouseover", hoverOnStar);
			controlStars.removeEventListener("mouseout", hoverOutOnStar);
		    
			var clickCoord = e.pageX - controlStarsOffset;
	        
			
			var raiting = clickCoord/(starSize*5);
			var num;
			switch(true){
				case raiting < 0.2:
				num = 0.2;
				break;
			    case raiting < 0.4:
				num = 0.4;
				break;
				case raiting < 0.6:
				num = 0.6;
				break;
			    case raiting < 0.8:
				num = 0.8;
				break;
				default:
				num = 1;
			}
			var dole = 1/numGlobalClick*olrRaiting;
			
			var newReit = olrRaiting - dole + 1/numGlobalClick*num;
			
			console.log("starReit"+num);
			scrollStars.style.width = (starSize*5*newReit)+"px";
			

		}
	

		
    numClick++;
	
	//console.dir(e.pageX);
	//console.dir(clickCoord);
	
	}
	
}
