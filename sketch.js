var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 255,
  g: 100,
  b: 0
};


function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  background(0);
  
textSize(32);
text('Party Time', 10, 30);
textSize(32);
text('Party Time', 340, 490);

  
  fill(250, 200, 200);
  ellipse( mouseX,mouseY,80,80)

  
  col.r = random(100, 255);
  col.g = 0
  col.b = random(100, 150);
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b,);
  ellipse(spot.x, spot.y, 24, 24);
}
