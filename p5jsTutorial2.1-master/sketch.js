var button2X;
var button2Y;
var button4X;
var button4Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;
  button4X = 590;
  button4Y = 440;

}

function draw()
{
	background(125,125,125)

	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,100,50);
	}

  fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text("Practice 1",35,40);

  fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,100,50);

//second button
	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("Options",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Options",button2X+30,button2Y+30);
	}

  //third button

  if (mouseX > 10 && mouseX < 100+10 && mouseY > 430 && mouseY < 100+100+100+100+90)
  {
    fill(0,154,255);
    stroke(255,255,255);
    strokeWeight(5);
    textSize(15);
    rect(10,440,100,50);

  }
  else
  {
    fill(0,154,255);
    stroke(0,0,0);
    strokeWeight(3);
    textSize(12);
    rect(10,440,100,50);
  }

  fill(255,255,255);
  stroke(0,0,0);
  text("Elaine",43,470);

//fourth button
  if (mouseX > button4X && mouseX < 100+100+100+100+100+100+90 && mouseY > button4Y && mouseY < 100+100+100+100+90)
  {
  	fill(102,204,0);
  	stroke(0,0,0);
  	strokeWeight(3);
  	rect(button4X,button4Y,100,50);
  }
  else
  {
  	fill(255,255,0);
  	stroke(0,0,0);
  	strokeWeight(3);
  	rect(button4X,button4Y,100,50);
  }

    fill(255,255,255);
  	stroke(0,0,0);
  	textSize(12);
  	text(" G U O",button4X+30,button4Y+30);

}
