var hr, min, sec;

function setup() {

  createCanvas(400,400);

  angleMode(DEGREES);

  
}
 

function draw() {
  background(0); 
  
  translate(200,200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,40,0);
  pop();



  noFill();
  stroke(255,0,0);
  strokeWeight(6);
  arc(0,0,265,265,0,secAngle,OPEN);

  noFill();
  stroke(0,255,0);
  strokeWeight(6);
  arc(0,0,250,250,0,minAngle,OPEN);

  noFill();
  stroke(0,0,255);
  strokeWeight(6);
  arc(0,0,235,235,0,hrAngle,OPEN);

  



 
}