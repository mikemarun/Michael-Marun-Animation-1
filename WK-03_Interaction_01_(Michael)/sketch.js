
let boxX_01= 50;
let boxX_02= 65;
let boxX_03= 105;

let circleY_01= 230;
let circleY_02= 371;
let circleY_03= 230;
let circleY_04= 371;

let angle = 0;

let elipse_01Dim= 65;
let elipse_01Scale=1;
let elipse_02Dim= 60;
let elipse_02Scale=1;

let elipse_03Dim= 30;
let elipse_03Scale=1;
let elipse_04Dim= 25;
let elipse_04Scale=1;

let annoyingsquare= 265;
let squareX= 265;
let circleX_01= 310;
let circleX_02= 324;
let circleX_03= 323;

let rectY1= 231;
let rectY2= 231;
let rectY_01= 207;
let rectY_02= 351;
let rectY_03= 207;
let rectY_04= 351;

function setup() {
  // put setup code here
    createCanvas(600, 600);
    angleMode(DEGREES);
}

function draw() {
  // put drawing code here


  if (elipse_04Dim > 175 || elipse_04Dim <25)
  {elipse_04Scale = elipse_04Scale*-1;
  } elipse_04Dim = elipse_04Dim + elipse_04Scale;




    background(255, 255, 102);

    noStroke()

  fill(color(133, 187, 101));
  rect( boxX_01, 175, 500, 250);
  boxX_01=boxX_01+7

  fill(color(17, 140, 79))
  rect( boxX_02, 190, 470, 220)
  boxX_02=boxX_02-3

  fill(color(133, 187, 101))
  rect(boxX_03, 230, 390, 140)
  boxX_03=boxX_03+2

  fill(color(17, 140, 79));
  circle( 102, circleY_01, 60);
  circleY_01 = circleY_01-2

  fill(color(17, 140, 79))
  circle( 102, circleY_02, 50)
  circleY_02=circleY_02+4

  fill(color(17, 140, 79))
  circle( 498, circleY_03, 60)
  circleY_03=circleY_03-3

  fill(color(17, 140, 79))
  circle( 498, circleY_04, 50)
  circleY_04=circleY_04+1

  push();
  translate(300,291);
  rotate(angle);
  fill(color(17, 140, 79))
  ellipse(0, 0, 110, 157);
  angle = angle+7
  pop();

  if (elipse_01Dim > 175 || elipse_01Dim <65)
  {elipse_01Scale = elipse_01Scale*-1;
  } elipse_01Dim = elipse_01Dim + elipse_01Scale;
  push();
  translate(300,313)
  scale(elipse_01Scale);
  fill(color(133, 187, 101))
  ellipse(0, 0, elipse_01Dim, elipse_02Dim)
  pop();

  if (elipse_02Dim > 175 || elipse_02Dim <60)
  {elipse_02Scale = elipse_02Scale*-1;
  } elipse_02Dim = elipse_02Dim + elipse_02Scale;
  push();
  translate(300,313);
  scale(elipse_02Scale);
  fill(color(17, 140, 79))
  ellipse(0, 0, elipse_03Dim, elipse_04Dim)
  pop();

  fill(color(17, 140, 79))
  square(annoyingsquare--, 287, 29)

  if (elipse_03Dim > 175 || elipse_03Dim <30)
  {elipse_03Scale = elipse_03Scale*-1;
  } elipse_03Dim = elipse_03Dim + elipse_03Scale;
  push();
  translate(300,270)
  fill(color(133, 187, 101))
  ellipse(0, 0, elipse_01Dim, elipse_02Dim)
  pop();

  if (elipse_04Dim > 175 || elipse_04Dim <25)
  {elipse_04Scale = elipse_04Scale*-1;
  } elipse_04Dim = elipse_04Dim + elipse_04Scale;
  push();
  translate(300,270)
  scale(elipse_04Scale)
  fill(color(17, 140, 79))
  ellipse(0, 0, elipse_03Dim, elipse_04Dim)
  pop();

  fill(color(17, 140, 79))
  square(squareX, 270, 18)
  squareX=squareX--

  fill(color(17, 140, 79))
  circle(circleX_01, 276, 20)
  circleX_01=circleX_01+1

  fill(color(17, 140, 79))
  circle(circleX_02, 280.5, 20)
  circleX_02=circleX_02-1

  fill(color(17, 140, 79))
  circle(circleY_03, 281, 20)
  circleX_03=circleX_03+1

  fill(color(133, 187, 101))
  rect(290, rectY1--, 7, 120)

  fill(color(133, 187, 101))
  rect(305, rectY2++, 7, 120)

  fill(color(133, 187, 101))
  rect(97, rectY_01, 12, 42)
  rectY_01=rectY_01-5

  fill(color(133, 187, 101))
  rect(98, rectY_02, 10, 38)
  rectY_02=rectY_02+3

  fill(color(133, 187, 101))
  rect(493, rectY_03, 12, 42)
  rectY_03=rectY_03-3

  fill(color(133, 187, 101))
  rect(493, rectY_04, 10, 38)
  rectY_04=rectY_04+5

}
