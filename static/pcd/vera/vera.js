let img;
let centerX = 230;     // middle point between the two eyes
let centerY = 180;
let eyeSize = 20;     // diameter of each eye
let eyeGap = 55;      // distance between the two eye centers
let pupilSize = 0.5;   // pupil size as a fraction of the eye (0.4 = 40%)
let lidAngle = 0.12;

async function setup() {
  // Load the image.
  img = await loadImage('creepy_doll.jpg');

  createCanvas(windowWidth, windowHeight);

  background(50);

  // Draw the image.
  image(img, 0, 0,windowWidth, windowHeight);

}

function draw() {
  drawEye(centerX - eyeGap / 2, centerY);
  drawEye(centerX + eyeGap / 2, centerY);
}

function drawEye(x, y) {
  // white of the eye
  fill(100);
  stroke(0);
  strokeWeight(eyeSize * 0.03);
  circle(x, y, eyeSize);

  // pupil: points toward the mouse, stays inside the eye
  let pupilD = eyeSize * pupilSize;
  let maxOffset = (eyeSize - pupilD) / 2 - eyeSize * 0.03;
  let angle = atan2(mouseY - y, mouseX - x);
  let d = min(maxOffset, dist(x, y, mouseX, mouseY));
  fill(0);
  circle(x + cos(angle) * d, y + sin(angle) * d, pupilD);

  fill(0);
  noStroke();
  arc(x, y, eyeSize, eyeSize, PI + lidAngle, TWO_PI - lidAngle, CHORD);
}

