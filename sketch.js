function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  fill("green");
  text("This is the clock that you must use to get out of the room you are locked in.",300,60)
  text("It is your last hope, otherwise you will be locked in forever.",305,90);
  textSize(35);
  text("The Clock of Fate",300,30)
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  //seconds
  strokeWeight(8);
  stroke("blue");
  noFill();
  var sec = map(sc,0,60,0,360);
  arc(0,0,300,300,0,sec);

  push();
  rotate(sec);
  strokeWeight(7);
  stroke("blue");
  line(0,0,100,0);
  pop();

  //minutes
  strokeWeight(8);
  stroke("yellow");
  noFill();
  var min = map(mn,0,60,0,360);
  arc(0,0,280,280,0,min);

  push();
  rotate(min);
  strokeWeight(7);
  stroke("yellow");
  line(0,0,75,0);
  pop();

  //hours
  strokeWeight(8);
  stroke("red");
  noFill();
  var h = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,h);

  push();
  rotate(h);
  strokeWeight(7);
  stroke("red");
  line(0,0,50,0);
  pop();

  //point
  push();
  stroke("white");
  point(0,0);
  pop();

}