//INSTRUCTION
//var bgImage;
var bgImage;
var b1;

function setup()
{
	createCanvas(500,500);
	bgImage = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/Instruction.png');
	b1 = new Button(390,470,100,25);
	b1.setText("Mainmenu");
	b1.setTextOver("Back");
	b1.setButtonFill(255,153,51);
	b1.setButtonOverFill(255,255,0);

//	bgImage = loadImage('https://bleungwpg.github.io/resourcehosting/backgroundimage.jpg');

}

function draw()
{
	background(125,125,125);
	image(bgImage,0,0,500,500);
	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../mainmenu/mainmenu.html","_self");
	}

}
