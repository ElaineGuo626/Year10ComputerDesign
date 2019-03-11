//Level 1 of Hard

var b1;
var b2;
var b3;
//add a new variable every time you add a button

function setup()
{
	createCanvas(500,500);
	//(x, y, length, height)
	b1 = new Button(10,10,100,25);
	b1.setText("Level 2");
	b1.setTextOver("Vamos");
	b1.setButtonOverFill(50,255,50);

	b2 = new Button(10,100,100,25);
	b2.setText("Intermediate");
	b2.setTextOver("Vamos");
	b2.setButtonOverFill(50,255,50);

	b3 = new Button(10,200,100,25);
	b3.setText("Mainmenu");
	b3.setTextOver("Vamos");
	b3.setButtonOverFill(50,255,50);
}

function draw()
{
	background(255,255,255);

//18: to show the button
	b1.showButton();
	b2.showButton();
	b3.showButton();
//have we pressed b1?
	if (b1.getButtonState() == 1)
	{
		//remember to type http://
		window.open("../Level2/Level2.html","_self");
	}

	if (b2.getButtonState() == 1)
	{
		window.open("../../Hard/Hard.html","_self");
	}

	if (b3.getButtonState() == 1)
	{
		window.open("../../Mainmenu/Mainmenu.html","_self");
	}
}
