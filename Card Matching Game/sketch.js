//Homepage

var b
gImage;
var button;

function setup()
{
	createCanvas(500,500);
	bgImage = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/Y10ProjectImages/Homepage.png');
	button = new Button(0,0,500,500);
}

function draw()
{
	background(125,125,125);
	button.showButton();
	image(bgImage,0,0,500,500);

	if (button.getButtonState() == 1)
	{
		window.open("mainmenu/mainmenu.html","_self");
	}
}
