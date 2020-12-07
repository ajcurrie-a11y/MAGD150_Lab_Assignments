//An interactive educational experience to teach about the mechanics of analog television and persistence of vision (simulated to the best extent I could code in a reasonable amount of time).

var stripHeight = 3;
var fps = 2;
var frameOdd = true;
var lastUpdateMillis = -10000;
var ballX = 200;
var ballY = 190;
var ballDir = 1;
var ballRadius = 8;
var prevMillis = 0;

function mouseOverRectBtn() {
  return (mouseX > 287 && mouseX < 327 && 
      mouseY > 257 && mouseY < 272);
}

function mouseOverCircBtn() {
  return dist(mouseX, mouseY, 354, 264) < 15;
}

function mouseClicked () {
  if (mouseOverRectBtn()) {
    if (fps < 10) {
      fps++;
      //print("DEBUG: fps: " + fps);
    } else {
      fps += 10;
    }
  }
  
  if (mouseOverCircBtn()) {
      if (fps >= 1) {
        if (fps <= 10) {
          fps--;
          //print("DEBUG: fps: " + fps);
        } else {
          fps -= 10;
        }
      }
  }
}


function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  let millFromPrevFrame = millis() - prevMillis;
  ballX += ballDir * millFromPrevFrame / 10;

  if (ballX - ballRadius < 50) {
    ballDir = 1;
  } else if (ballX + ballRadius > 350) {
    ballDir = -1;
  }
  
  
  if (millis() - lastUpdateMillis > 1 / fps * 1000) {
    //print("DEBUG: Running update...");
  
    background(255);

    rect(20, 110, 360, 180);


    if (mouseOverCircBtn()) {
      fill(220, 220, 220);
    } else {
      fill(255, 255, 255);
    }
    ellipse(354, 264, 30, 30);
    
    
    if (mouseOverRectBtn()) {
      fill(220, 220, 220);
    } else {
      fill(255, 255, 255);
    }
    rect(287, 257, 40, 15);
    fill(255, 255, 255);
    
    push();
      fill(0, 0, 0);
      text("fps+", 296, 268);
      text("fps-", 344, 268);
    pop();
    
    //print("DEBUG: BallX: " + ballX);
    push();
      noStroke();
      fill(255, 0, 0);
      ellipse(ballX, ballY, 15, 15);
    pop();

    
    push();
      fill(0, 255, 0);
      textSize(18);
      text("fps: " + fps, 290, 162);
    pop();


      if (frameOdd) {
        for (let offset = 0; 140 + offset + stripHeight <= 240; offset += stripHeight * 2) {
          push();
            fill(255);
            noStroke();
            rect(50, 140 + offset, 300, stripHeight);
          pop();
        }
      } else {
        for (let offset = stripHeight; 140 + offset + stripHeight <= 240; offset += stripHeight * 2) {
          push();
            fill(255);
            noStroke();
            rect(50, 140 + offset, 300, stripHeight);
          pop();
        }
      }
      push();
        noFill();
        rect(50, 140, 300, 100, 20);
      pop();
      
      
      line(0, 300, 400, 300);
      push();
        fill(0, 0, 0);
        rect(40, 290, 320, 10);
      pop();
      
      line(200, 110, 150, 60);
      line(200, 110, 250, 60);
      
      push();
        strokeWeight(5);
        point(250, 60);
        point(150, 60);
      pop();
      
      lastUpdateMillis = millis();
      frameOdd = !frameOdd;
  }
  
  prevMillis = millis();
}