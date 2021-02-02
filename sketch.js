var shade1 = 20, shade2 = 20, shade3 = 50, ran1 = Math.floor(Math.random() * 500) + 1, ran2 = Math.floor(Math.random() * 250) + 250;

function setup() {
  createCanvas(500, 500);
  background(0);
  rectMode(CENTER);
  textAlign(CENTER);
  noLoop();
  draw();
  pixelDensity(1)
}

/*
FUNCTIONS FOR DRAWING STUFF
*/

function FillRect(width1, height1, width2, height2, fill1, roundedCorner) {
  fill(fill1);
  rect(width1, height1, width2, height2, roundedCorner, roundedCorner, roundedCorner, roundedCorner);
}

function drawSky() {
  noStroke();
  for (i = 0; i < 100; i++) {
    FillRect(width / 2, height / 2, width - 2 * i, height - 2 * i, color(shade1, shade2, shade3 + i * 2), 120);
  }
  shade3 = 250;
  for (i = 0; i < 50; i++) {
    FillRect(width / 2, height / 2, width - 2 * i - 200, height - 2 * i - 200, color(shade1 + (148 / 50) * i, shade2 + (109 / 50) * i, shade3 - i * 4), 120);
  }
  shade1 = 168;
  shade2 = 129;
  shade3 = 50;
  for (i = 0; i < 50; i++) {
    FillRect(width / 2, height / 2, width - 2 * i - 300, height - 2 * i - 300, color(shade1, shade2 + i * 2, shade3), 120);
  }
  stroke(1);
}
/*
function drawLetter(letter, x, y,  stretch) {
  push();
  fill(255);
  translate(width / 2, height - 20);
  textAlign(CENTER);
  textSize(10);
  scale(stretch, 10);
  text(letter, x, y);
  pop();
}
*/
function pebble() {
  for (i = 0; i < 10000; i++) {
    strokeWeight(50);
    fill("black");
    circle(ran1, ran2, 1);
    ran1 = Math.floor(Math.random() * 500) + 1;
    ran2 = Math.floor(Math.random() * 250) + 250;
  }
}

function drawRoad() {
  noStroke();
  push();
  FillRect(width / 2, height * 3 / 4, width, height / 2 + 1, color("grey"), 10);
  filter(BLUR, 5);
  pop();
  //drawLetter("H", width / 2, height - 20, 40);
  /*
  textSize(100)
  translate(width/2, height-20);
  rotate(HALF_PI);
  text("2025", 0, 0);
  */
  fill("white");
  //pebble the road
  pebble();
  strokeWeight(10);
  stroke("black");
  //create road
  triangle(40, height, width / 2 - 40, height / 2 + 10, width / 2 - 40, height);
  triangle(width - 40, height, width / 2 + 40, height / 2 + 10, width / 2 + 40, height);
  rect(width / 2, height * 3 / 4, 80, height / 2 - 5);
  //outline for road
  stroke("white");
  strokeWeight(7);
  line(40, height, width / 2 - 40, height / 2);
  line(width - 40, height, width / 2 + 40, height / 2);
  fill("white");
  stroke("black")
  textSize(40)
  //HORIZON and 2025
  text("N", width / 2, height - 10);
  text("O", width / 2, height - 45);
  text("Z", width / 2, height - 80);
  text("I", width / 2, height - 115);
  text("R", width / 2, height - 150);
  text("O", width / 2, height - 185);
  text("H", width / 2, height - 220);
  fill("green")
  text("2", width / 2 - 30, height - 45);
  text("5", width / 2 + 60, height - 45);
  text("2", width / 2 + 30, height - 45);
}

function drawBorder() {
  fill(0, 0, 0, 10);
  strokeWeight(10);
  ellipse(width/2, height/2, 200, 200);

}

/*
Actual Code itself
*/

function draw() {
  shade1 = 20;
  shade2 = 20;
  shade3 = 50;
  fill("black")
  drawSky();
  drawRoad();
  noStroke();
  fill("white")
  //pixel manipulation for crop
  loadPixels();
  textFont("Fraunces")
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      // assuming height == width
      if (dist(i, j, width / 2, height / 2) > width / 2) {
        const idx = (i + j * width) * 4;
        pixels[idx + 0] = 0;
        pixels[idx + 1] = 0;
        pixels[idx + 2] = 0;
        pixels[idx + 3] = 0;

      }
    }
  }
  updatePixels();
  drawBorder();
}