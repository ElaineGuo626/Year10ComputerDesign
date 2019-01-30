function setup()
{

  createCanvas(700,500);

}

function draw()
{
	background(102,204,0)
  stroke(0,0,0);
	strokeWeight(3);

  fill(255,255,0);
  textSize(12);
  text("Hello World",360,30);

  text("Donald Trump",10,130);
	rect(200,10,100,50);


  fill(255,255,0);
  rect(10,100,100,50);

  fill(102,204,0);
  stroke(255,255,255);
  strokeWeight(6);
  textSize(18);
	text("Elaine Guo",270,270);

//Move the text code before the rectangle code so that the text is behind the rectangle.
//Put the stroke of the text "Elaine Guo" in the very end so that it does not affect the texts before it.
//Put colour code before the target to assign the colour.


}
