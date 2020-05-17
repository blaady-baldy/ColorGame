var numSquares = 6;
var pickedColor;
var colors = [];
var message = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var reset1 = document.querySelector("#Reset1");
var easy = document.querySelector("#Easy");
var hard = document.querySelector("#Hard");
var tut = document.querySelector("#HowToPlay");
var play = document.querySelector("#tut")

// var reset = document.querySelector("#NewColours");
var dispPickedColor = document.querySelector("#PickedColor");

// Generating Square
function sqGen(numSquares)
{
     	squareGenerator(numSquares);
     	pickedColor = colors[Math.floor(Math.random() * numSquares)];
  		dispPickedColor.textContent = pickedColor;

  		for(var j=0;j<squares.length;j++)
  		{
  			if(j<numSquares)
  			{
  				squares[j].style.background = colors[j];
  				squares[j].display = "block";
  			}
  			else
  			{
  				squares[j].display = "none";
  			}
  		}
  		for (var i=0;i<numSquares;i++)
  		{
     	squares[i].addEventListener("click", function(){
		if(this.style.background === pickedColor)
		{
			message.textContent = "Correct";
			reset1.textContent= "Play Again";
			for(var j=0 ; j< numSquares ; j++)
			{
				squares[j].style.background = pickedColor;
				h1.style.background = pickedColor;
			}
		}
		else
		{
			message.textContent = "Try Again";
			this.style.background = "#232323";
		}
	})
  	}	
}

function squareGenerator(numSquares){
	colors=[]
	for ( var j =0;j<numSquares;j++)
	{
		colors[j]=colorGen();
	}
}
// for(var i =0 ; i < numSquares ; i++)	
// {squares[i].addEventListener("click", function(){
// 		if(this.style.background === pickedColor)
// 		{
// 			message.textContent = "Correct";
// 			for(var j=0 ; j< numSquares ; j++)
// 			{
// 				squares[j].style.background = pickedColor;
// 				h1.style.background = pickedColor;
// 			}
// 		}
// 		else
// 		{
// 			message.textContent = "Try Again";
// 			this.style.background = "#232323";
// 		}
	
// })
// }




// Generating Random Colors
function colorGen()
{
	// Generating red color
	var r = Math.floor(Math.random()*256);
	// Generating green color
	var g = Math.floor(Math.random()*256);
	// Generating blue color
	var b = Math.floor(Math.random()*256);
    var colortemp = "rgb(" + r + ", " + g + ", " + b + ")";
    return colortemp;
}

reset1.addEventListener("click",function(){
	reset(numSquares);
});


function reset(numSquares)
{
	play.style.display = "none";
	sqGen(numSquares);
	h1.style.background = "steelblue";
	message.textContent = "";
	reset1.textContent = "New Colours";
	for (var j=0;j<6;j++)
	{
		if(j<numSquares)
		{
			squares[j].style.display = "block"
		}
		else
		{
			squares[j].style.display = "none";
		}
	}

}

easy.addEventListener("click",function(){
	numSquares=3;
	reset(3);
	easy.classList.add("selected");
	hard.classList.remove("selected");

})

hard.addEventListener("click",function(){
	numSquares=6;
	reset(6);
	hard.classList.add("selected");
	easy.classList.remove("selected");

})
sqGen(6);

tut.addEventListener("click",function() {
play.style.display = "block";
})

