//Level 2
var b1;
var b2;
var b3;
//add a new variable every time you add a button

function setup()
{
	createCanvas(500,500);
	//(x, y, length, height)
	b1 = new Button(10,10,100,25);
	b1.setText("Play");
	b1.setTextOver("Vamos");
	b1.setButtonOverFill(50,255,50);
	b1.setTextPressed("Vamos");

	b2 = new Button(10,100,100,25);
	b2.setText("Beginners")
	b2.setTextOver("Back")
	b2.setButtonOverFill(0,128,255)

	b3 = new Button(10,200,100,25);
	b3.setText("Mainmenu")
	b3.setTextOver("Back")
	b3.setButtonOverFill(0,128,255)
}


function draw()
{
	background(255,255,255);

//18: to show the button
	b1.showButton();
	b2.showButton();
	b3.showButton();
//have we pressed b1?
	if (b2.getButtonState() == 1)
	{
		window.open("../../Easy/Easy.html","_self");
	}

	if (b3.getButtonState() == 1)
	{
		window.open("../../Mainmenu/Mainmenu.html","_self");
	}

}
