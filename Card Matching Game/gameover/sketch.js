//gameover
var bgImage;
var b1;
var b2;

function setup()
{
	createCanvas(800,800);
	bgImage = loadImage ('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/Coding-5.png.png');
	b1 = new Button(190,150,60,25);
	b1.setText("MainMenu");
	b1.setTextOver("Back");
	b1.setButtonLH(103,39);
	b1.setButtonFill(224,224,224);
	b1.setButtonOverFill(50,255,50);

	b2 = new Button (190,210,60,25);
	b2.setText("Restart");
	b2.setTextOver("Level 1");
	b2.setButtonLH(103,39);
	b2.setButtonFill(255,255,153);
	b2.setButtonOverFill(0,0,255);

}

function draw()
{
	background(255,255,255);
	image(bgImage,0,0,500,500);
	b1.showButton();
	b2.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../mainmenu/mainmenu.html","_self");
	}

	if (b2.getButtonState() == 1)
	{
		window.open("../level1/level1.html","_self");
	}

}
