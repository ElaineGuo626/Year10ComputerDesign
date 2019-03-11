//Mainmenu
var b1;
var b2;
var b3;
var b4;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("Instruction");
	b1.setTextOver("View");
	b1.setButtonOverFill(0,128,255);

	b2 = new Button(10,100,100,25);
	b2.setText("Easy")
	b2.setTextOver("Go")
	b2.setButtonOverFill(0,128,255)

	b3 = new Button(10,200,100,25);
	b3.setText("Hard")
	b3.setTextOver("Go")
	b3.setButtonOverFill(0,128,255)

	b4 = new Button(10,300,100,25);
	b4.setText("Highscore")
	b4.setTextOver("View")
	b4.setButtonOverFill(0,128,255)
}

function draw()
{
	background(204,229,255);

	b1.showButton();
	b2.showButton();
	b3.showButton();
	b4.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../Instruction/Instruction.html","_self");
	}

	if (b2.getButtonState() == 1)
	{
		window.open("../Easy/Easy.html","_self");
	}

	if (b3.getButtonState() == 1)
	{
		window.open("../Hard/Hard.html","_self");
	}

	if (b4.getButtonState() == 1)
	{
		window.open("../Highscore/Highscore.html","_self");
	}
}
