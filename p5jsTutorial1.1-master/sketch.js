function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(300,150);

}

function draw()
{
  //create a background using RGB values
  background(35,185,175)

  //Top left
  fill(227,235,116);
  rect(0,0,90,60);
  //Centre
  fill(238,127,16);
  rect(300/2-90/2,150/2-60/2,90,60);
  //Top right
  fill(227,235,116);
  rect(209,0,90,60);
  //Bottom left
  fill(227,235,116);
  rect(0,89,90,60);
  //Bottom right
  fill(227,235,116);
  rect(209,89,90,60);

//Worked with Avelyn
}
