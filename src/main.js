import './main.css' 

var numStars = 5; //количество звезд
var starSize = 32; //размер картинки

//var olrRaiting = 0.6; //старый рейтинг в долях

var controlStars = document.getElementById("control_stars");
var olrRaiting  = Number(controlStars.getAttribute('data-raiting'));
var numGlobalClick = Number(controlStars.getAttribute('data-numclick')); // количество кликов общее берется со страници


var controlStarsOffset = controlStars.offsetLeft;  

var scrollStars  = document.createElement('div'); //заполнение рейтингом

for(var i=0; i<numStars; i++){
	
	controlStars.appendChild(document.createElement('span'));
}

//debugger;
controlStars.appendChild(scrollStars);

controlStars.addEventListener("click", clickOnStar());

controlStars.addEventListener("mouseover", hoverOnStar);

controlStars.addEventListener("mouseout", hoverOutOnStar);

scrollStars.style.width="0px";

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
	        
			
			var raiting = clickCoord/(starSize*numStars);
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

			scrollStars.style.width = (starSize*numStars*newReit)+"px";
			

		}
	

		
    numClick++;
	
	}
	
}
