//MAINMENU
//var bgImage;
var bgImage;
var b1;
var b2;
var b3;
var b4;
var b5;

function setup()
{
	createCanvas(500,500);
	bgImage = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/Y10ProjectImages/Mainmenu.png');
	b1 = new Button(200,120,100,25);
	b1.setText("Instruction");
	b1.setTextOver("View");
	b1.setButtonOverFill(255,255,0);

	b2 = new Button(200,160,100,25);
	b2.setText("Beginners");
	b2.setTextOver("Go");
	b2.setButtonOverFill(0,0,255);

	b3 = new Button(200,200,100,25);
	b3.setText("Intermediate");
	b3.setTextOver("Go");
	b3.setButtonOverFill(255,153,51);

	b4 = new Button(200,240,100,25);
	b4.setText("Advanced");
	b4.setTextOver("Go");
	b4.setButtonOverFill(255,0,0);

	b5 = new Button(200,280,100,25);
	b5.setText("Shop");
	b5.setTextOver("Go");
	b5.setButtonOverFill(0,255,0);


//	bgImage = loadImage('https://bleungwpg.github.io/resourcehosting/backgroundimage.jpg');

}

function draw()
{
	background(125,125,125);
	image(bgImage,0,0,500,500);
	b1.showButton();
	b2.showButton();
	b3.showButton();
	b4.showButton();
	b5.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../instruction/instruction.html","_self");
	}

	if (b2.getButtonState() == 1)
	{
		window.open("../level1/level1.html","_self");
	}

	if (b3.getButtonState() == 1)
	{
		window.open("../intermediate/intermediate.html","_self");
	}

	if (b4.getButtonState() == 1)
	{
		window.open("../advanced/advanced.html","_self");
	}

	if (b5.getButtonState() == 1)
	{
		window.open("../shop/shop.html","_self");
	}

}
