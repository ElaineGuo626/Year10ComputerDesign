//Highscore

var b1;
var b2;
//add a new variable every time you add a button

function setup()
{
	createCanvas(500,500);
	//(x, y, length, height)
	b1 = new Button(10,10,100,25);
	b1.setText("Mainmenu");
	b1.setTextOver("Back");
	b1.setButtonOverFill(50,255,50);
	b1.setTextPressed("GO");
}

function draw()
{
	background(255,255,255);

//18: to show the button
	b1.showButton();
//have we pressed b1?
	if (b1.getButtonState() == 1)
	{
		//remember to type http://
		window.open("../Mainmenu/Mainmenu.html","_self");
	}
}
