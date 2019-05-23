//Shop

var b
gImage;
var button;

function setup()
{
	createCanvas(500,500);
	bgImage = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/shop.png');
	button = new Button(360,80,90,30);
	button.setText("MainMenu");
	button.setTextOver("Back");
	button.setButtonFill(192,192,192);
	button.setButtonOverFill(255,255,255);
}

function draw()
{
	background(125,125,125);
	image(bgImage,0,0,500,500);
	button.showButton();

	if (button.getButtonState() == 1)
	{
		window.open("../mainmenu/mainmenu.html","_self");
	}
}
