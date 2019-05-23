var c1;
var c2;
var c3;
var c4;
var bgImage;
var button;
var delayTimer;
var deck;
var flipAnimation;
var health;
var keyIcon;

function preload()
{
}


function setup()
{
	createCanvas(1000,600);

	health = new HealthBar(3,3);
	var healthImage = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/heart.png');
	health.setHealthIcon(healthImage);
	health.setHealthSpacing(60);
	health.setHealthBarLH(50,50);
	health.setHealthBarXY(200,360);
	keyIcon = new HealthBar(0,3);
	var keyImage = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/key.png');
	keyIcon.setHealthIcon(keyImage);
	keyIcon.setHealthSpacing(60);
	keyIcon.setHealthBarLH(50,100);
	keyIcon.setHealthBarXY(400,300);


	var flipAnimation = new Array(5);
	flipAnimation[0] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-1.png');
	flipAnimation[1] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-2.png');
	flipAnimation[2] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-3.png');
	flipAnimation[3] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-4.png');
	flipAnimation[4] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-5.png');
	flipAnimation[5] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-6.png');

	bgImage = loadImage ('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/therealockedman.png');
	button = new Button (840,500,90,30);
	button.setText("Mainmenu");
	button.setTextOver("Back");
	button.setButtonOverFill(153,204,255);

	var flippedCard = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/Card1.png');
	var card1 = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/Cat.png');
	var card2 = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/Water.png');
	var card3 = loadImage('https://raw.githubusercontent.com/ElaineGuo626/Year10ComputerDesign/master/Y10ProjectImages/Apple.png');

	deck = new CardDeck(100,140,2,3,flippedCard,true); // length,height,maxrow,maxcol,flippedCard,random
	deck.setFlipAnimation(flipAnimation);

	deck.addCard(card1,0);
	deck.addCard(card1,0);
	deck.addCard(card2,1);
	deck.addCard(card2,1);
	deck.addCard(card3,2);
	deck.addCard(card3,2);


	// delay timer
	delayTimer = new Timer(0,0,0,0);
	// ------- CUSTOM THE 1 LINE OF CODE BELOW ------
	delayTimer.setMaxTime(2);  // set timer to countdown from 3 seconds
	delayTimer.resetTimer(); 	// reset the timer

}

function draw()
{
	background(204,255,153);
	image(bgImage,500,100,150,100);
	button.showButton();

	if (button.getButtonState() == 1)
	{
		window.open("../mainmenu/mainmenu.html","_self");
	}

	// if the game is finished
	if (deck.showDeck() == 1)
	{
		// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
		window.open("../mainmenu/mainmenu.html","_self");
	}

	// everytime a card match has been found DO SOMETHING
	if (deck.checkMatch() >= 1)
	{
		console.log('match found');



		// initiate a delay timer when a question is answered
		delayTimer.startTimer();
		if (delayTimer.isTimerFinished() == true)
		{
			if (deck.checkMatch() == 1)
			{
				console.log('incorrect match');
				deck.checkMatch("reset");
				health.deductHealth(1);
				if (health.getCurrentHealth() <= 0)
				{
					window.open("../gameover/gameover.html","_self");
				}
				// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
			}
			else if (deck.checkMatch() == 2)
			{
				keyIcon.addHealth(1);
				console.log('correct match');
				deck.checkMatch("remove");
				// -------- GOOD PLACE TO SOUND EFFECT HERE -----------
			}
			delayTimer.resetTimer();
		}
	}

	// show health bar
	health.showHealthIcons();
	keyIcon.showHealthIcons();

}
