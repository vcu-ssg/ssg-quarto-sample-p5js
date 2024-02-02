let stars = [];
let numStars = 500;
let meteors = [];
let numMeteors = 1;
let moon;


function preload(){
  img = loadImage("connection/image/fire.png")
}

function setup() {
  let canvas = createCanvas(500, 380);
  canvas.parent('connection-container');
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }

  for (let i = 0; i < numMeteors; i++) {
    meteors.push(new Meteor());
  }

  moon = new Moon();
}

function draw() {
  setGradient(0, 0, width, height, color(10, 32, 78), color(16, 62, 128));
  image(img, 200, 250);

  for (let star of stars) {
    star.twinkle();
    star.display();
  }

  for (let meteor of meteors) {
    meteor.move();
    meteor.display();
  }

  moon.display();
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height - 150);
    this.size = random(1, 3);
    this.color = color(255, 255, 255);
    this.twinkleSpeed = random(0.5, 2);
  }

  twinkle() {
    let brightness = map(sin(frameCount * this.twinkleSpeed), -1, 1, 100, 255);
    this.color.setAlpha(brightness);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}

class Meteor {
  constructor() {
    this.reset();
  }

  move() {
    this.x -= this.speed;
    this.y += this.speed;

    if (this.x < 0 || this.y > height - 150) {
      this.reset();
    }
  }

  display() {
    stroke(255);
    strokeWeight(2);
    line(this.x, this.y, this.x + this.length, this.y - this.length);
  }

  reset() {
    this.x = random(width * 0.8, width);
    this.y = random(height * 0.1);
    this.length = random(5, 15);
    this.speed = random(2, 6);
  }
}

class Moon {
  constructor() {
    this.x = width * 0.85;
    this.y = height * 0.2;
    this.size = 50;
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.size);
  }
}

new p5(connectionSketch, 'connection-container');