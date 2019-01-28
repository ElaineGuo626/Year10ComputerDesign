function setup()
{
  createCanvas(700,500);

}

function draw()
{
	background(144,178,216)


  //Left
	fill(133,61,228);
	stroke(255,255,102);
	strokeWeight(6);

	rect(10,10,100,50);
	rect(10,100,100,50);

  //Right
	fill(255,255,102);
	stroke(133,61,228);
	strokeWeight(6);

	rect(150,10,100,50);
	rect(150,100,100,50);

  //New triangles - Right
  fill(255,178,102);
	stroke(153,255,204);
	strokeWeight(6);

	rect(500,10,100,50);

  //New triangles - Left
  fill(153,255,204);
	stroke(255,178,102);
	strokeWeight(6);

	rect(390,10,100,50);

  //Worked with Avelyn
  //Findings:As the strokeweight increases, the gap between the two rectangles gets smaller
}
