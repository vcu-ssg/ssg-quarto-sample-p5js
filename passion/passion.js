var mySketch = function(p) {
  let gifX = 0; 
  let particles = [];

  // Variables for images
  let food1, food2, food3, food4, food5, food6, food7, movingGif;

  p.preload = function() {
    food1 = p.loadImage("passion/image/hotpot.png");
    food2 = p.loadImage("passion/image/kbbq.png");
    food3 = p.loadImage("passion/image/ramen.png");
    food4 = p.loadImage("passion/image/dim sum.png");
    food5 = p.loadImage("passion/image/tiramisu.png");
    food6 = p.loadImage("passion/image/milkshake.png");
    food7 = p.loadImage("passion/image/roasted chicken.png");
    movingGif = p.loadImage("passion/image/car.gif");
  };

  p.setup = function() {
    p.createCanvas(500, 380);
  };

  p.draw = function() {
    p.background(50); 

    let shakeX = p.random(-6, 6);
    let shakeY = p.random(-6, 6);
    p.image(food1, 67 + shakeX, 92 + shakeY, 110, 110);
    p.image(food2, 260 + shakeX, 52 + shakeY, 110, 110);
    p.image(food3, 360 + shakeX, 300 + shakeY, 110, 110);
    p.image(food4, 240 + shakeX, 280 + shakeY, 110, 110);
    p.image(food5, 120 + shakeX, 270 + shakeY, 110, 110);
    p.image(food6, 30 + shakeX, 20 + shakeY, 110, 110);
    p.image(food7, 390 + shakeX, 20 + shakeY, 110, 110);

   
    p.image(movingGif, gifX, 100);
    gifX += 2;
    if (gifX > p.width) {
      gifX = -movingGif.width; 
    }


    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        particles.splice(i, 1); 
      }
    }

    
    if (p.frameCount % 2 == 0) { 
      particles.push(new Particle(gifX + 60, 200));
    }
  };

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.vx = p.random(-1, 1);
      this.vy = p.random(-1, -5);
      this.alpha = 255;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }

    show() {
      p.noStroke();
      p.fill(255, this.alpha);
      p.ellipse(this.x, this.y, 16);
    }

    finished() {
      return this.alpha <= 0;
    }
  }
};

new p5(mySketch, 'sketch-container');
