//Intermediate

var b
bgImage;
var b1;
var b2;

function setup()
{
	createCanvas(500,500);
	bgImage = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/intermediate.png');
	b1 = new Button(200,180,90,30);
	b1.setText("MainMenu");
	b1.setTextOver("Back");
	b1.setButtonOverFill(160,160,160);

	b2 = new Button(200,240,90,30);
	b2.setText("Play");
	b2.setTextOver("Go");
	b2.setButtonOverFill(52,153,255);
}

function draw()
{
	background(125,125,125);
	image(bgImage,0,0,500,500);
	b1.showButton();
	b2.showButton();


	if (b1.getButtonState() == 1)
	{
		window.open("../mainmenu/mainmenu.html","_self");
	}

	if (b2.getButtonState() == 1)
	{
		window.open("../intergame/intergame.html","_self");
	}

}
