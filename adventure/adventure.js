var adventureSketch = function(p) {
  var x;
  var sound;

  p.preload = function() {
    sound = p.loadSound("adventure/birdy.wav");
  };

  p.setup = function() {
    let canvas = p.createCanvas(500, 380);
    canvas.parent('adventure-container');
    x = 0;
  };

  p.draw = function() {
    p.background(179, 222, 249);
    backMountains();
    Cloud();
    drawSun();
    Campsite();
  };

  function Cloud() {
    p.push();
    p.noStroke();
    p.fill(255);
    x = x + 0.9;
    p.ellipse(x + 100, 100, 70, 30);
    p.ellipse(x + 130, 100, 70, 30);
    p.ellipse(x + 115, 90, 70, 30);
    if (x > 450) {
      x = -100;
    }
    p.ellipse(x + 180, 180, 70, 30);
    p.ellipse(x + 210, 180, 70, 30);
    p.ellipse(x + 195, 170, 70, 30);
    if (x > 450) {
      x = -100;
    }
    p.pop();
  }

  function drawSun() {
    p.push();
    p.translate(100, 80);
    p.rotate(p.radians(p.frameCount / 2));
    sunnyCenter();
    sunRays();
    p.pop();
  }

  function sunnyCenter() {
    p.push();
    p.fill(245, 187, 87);
    p.ellipse(0, 0, 60, 60);
    p.pop();
  }

  function sunRays() {
    p.push();
    p.stroke(245, 187, 87);
    p.line(0, -60, 0, -40);
    p.line(0, 40, 0, 60);
    p.line(-45, -45, -30, -30);
    p.line(45, -45, 30, -30);
    p.line(-60, 0, -40, 0);
    p.line(40, 0, 60, 0);
    p.line(-45, 45, -30, 30);
    p.line(45, 45, 30, 30);
    p.pop();
  }

  function Campsite() {
    p.push();
    p.translate(0, -80);
    p.fill(77, 195, 65);
    p.rect(-10, 310, 510, 310);
    p.pop();
    p.fill(187, 88, 6);
    p.triangle(20, 370, 70, 200, 140, 370);
    p.fill(0);
    p.triangle(60, 370, 70, 300, 100, 370);
    p.push();
    p.translate(100, 80);
    p.stroke(133, 69, 0);
    p.strokeWeight(20);
    p.line(70, 270, 150, 300);
    p.line(150, 270, 70, 300);
    p.pop();
  }

  function backMountains() {
    p.push();
    p.translate(0, 112);
    p.fill(19, 90, 84);
    p.stroke(19, 90, 84);
    p.strokeWeight(15);
    p.strokeJoin(p.ROUND);

    p.triangle(80, 80, -20, 310, 150, 310);
    p.triangle(130, 50, 10, 310, 230, 310);
    p.triangle(200, 10, 40, 310, 340, 310);
    p.triangle(240, 90, 70, 310, 400, 310);
    p.triangle(300, 20, 150, 310, 450, 310);
    p.triangle(350, 10, 210, 310, 510, 310);
    p.triangle(440, 80, 300, 310, 560, 310);
    p.triangle(520, 10, 400, 310, 620, 310);
    p.pop();
  }
};

//new p5(adventureSketch, 'adventure-container');
