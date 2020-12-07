var pixelSize = 5;
var playerRot = 0;
var playerSpeed = 0.2;
var rotSpeed = 0.01;
var playerX = 0;
var playerY = 0;
var playerRad = 5.77;
var playerChangeX = 0;
var playerChangeY;

function setup() {
  createCanvas(400, 400);
  
  print("   INSTRUCTIONS    ");
  print("-------------------");
  print("Arrow keys to move.");
  
  
  
  //print("Drawing first pixel...");
}

/*function keyTyped() {
  //print(keyCode);
  if (keyIsDown(LEFT_ARROW)) {
      //print("Player moved up!");
      playerX -= playerSpeed;
      lastMove = "left";
    } else if (key == "RIGHT_ARROW") {
      playerX += playerSpeed;
      lastMove = "right";
    } else if (key == "UP_ARROW") {
      playerY += playerSpeed;
      lastMove = "up";
    } else if (key == "DOWN_ARROW") {
      playerY += playerSpeed;
      lastMove = "down";
    }
}*/


//This function draws a pixel with the coordinates (x, y) at its upper-left corner and with color 'color'.
function pixel(x, y, color) {
  //print("color: " + color);
  push();
    fill(color);
    noStroke();
    rect(x, y, pixelSize, pixelSize);
  pop();
}


function circlesIntersect(x1, y1, x2, y2, r1, r2) {
  if (dist(x1, y1, x2, y2) < r1 + r2) {
    return true
  } else {
    return false;
  }
}

/*function canvCoords(x, y) {
  canvY = (x - playerX) / sin(playerRot - PI / 4);
    canvX = (1/cos(playerRot - PI / 4)) * (x - playerX) + (x - playerX) / cos(playerRot - PI / 4);
  
  if (zoomed) {
    canvX *= zoomedScaleFactor;
    canvY *= zoomedScaleFactor; 
  }
  
  return [canvX, canvY];
}*/


//This function draws a rock at approximately the coordinates (x, y) with a size of 'size'.
function rock(x, y, size) {
  var g1 = color(125, 125, 125);
  var g2 = color(135, 135, 135);
  var g3 = color(145, 145, 145);

  
  let p = pixelSize;
  
  push();
    
    scale(size);
    
    x = x / size;
    y = y / size;
    
  
    pixel(x + p, y, g1);
    pixel(x, y + p, g3);
    pixel(x + p, y, g2);
    pixel(x + p, y + p, g1);
    pixel(x + 2 * p, y, g3);
    pixel(x + 2 * p, y + p, g1);
    pixel(x - p, y, g2);
    pixel(x, y - p, g3);
    pixel(x + p, y - p, g1);
  
    
  pop();
    
    x *= size;
    y *= size;
  
    //circle(x + size * 5, y + size * 9.3, size * 8);
  /*push();
  strokeWeight(10);
  point(x + size * 5, y + size * 9.3);
  
  pop();*/
  /*push();
  translate(playerX, playerY);
  rotate(playerRot);
  translate(-1 * width / 2, -1 * width / 2);
  
  circle(x + size * 5, y + size * 9.3, size * 8);
  pop();*/
  
  //Collision detector:
  //If the circular hitbox of the player is intersecting the     //circular hitbox of this rock, push the player back to       //where they were last frame before they moved.
  if (circlesIntersect(x + size * 5, y + size * 2.5, playerX, playerY, size * 9, playerRad)) {
    //print("Collided!");
    playerX -= playerChangeX;
    playerY -= playerChangeY;
  }
}

function draw() {
  background(160, 255, 130);
  
  fill(0, 0, 0);
  
  if (frameCount < 300) {
    text("Use arrow keys to move. ", 140, 340);
    
  }
  
  //circle(canvCoords(110, 80)[0], canvCoords(110, 80)[1], 10);
  
  
  
  if (keyIsDown(UP_ARROW)) {
      playerChangeX = cos(playerRot * -1 - PI / 2) * playerSpeed;
      playerChangeY = sin(playerRot * -1 - PI / 2) * playerSpeed;
    
      playerX += playerChangeX;
      playerY += playerChangeY;
    
    } else if (keyIsDown(DOWN_ARROW)) {
      playerChangeX = cos(playerRot * -1 - PI / 2) * playerSpeed * -1;
      playerChangeY = sin(playerRot * -1 - PI / 2) * playerSpeed * -1;
    
      playerX += playerChangeX;
      playerY += playerChangeY;
      
    } else if (keyIsDown(LEFT_ARROW)) {
      playerRot += rotSpeed;
      
    } else if (keyIsDown(RIGHT_ARROW)) {
      playerRot -= rotSpeed;
      
    }
  
  
  translate(width / 2, height / 2);
  
  
  
  var blue = color(0, 0, 255);
  var black = color(0, 0, 0);
  
  
  //Draw the player.
  push();
    scale(0.5);
  
      pixel(0, 0, blue);
  pixel(0, pixelSize, blue);
  pixel(pixelSize, 0, blue);
  pixel(0, pixelSize, blue);
  pixel(0, -1 * pixelSize, blue);
  pixel(-1 * pixelSize, 0, blue);
  //print("Drawing pixel...");
   pixel(-1 * pixelSize, -1 * pixelSize, blue);
  //print("Drew pixel.");
   pixel(-1 * pixelSize, pixelSize, blue);
  pixel(pixelSize, -1 * pixelSize, blue);
  pixel(pixelSize, pixelSize, blue);
  
  pixel(pixelSize * -1, pixelSize * 2, black);
  pixel(0, pixelSize * 2, black);
  pixel(pixelSize, pixelSize * 2, black);
  
  pixel(pixelSize * -1, pixelSize * -2, black);
  pixel(0, pixelSize * -2, black);
  pixel(pixelSize, pixelSize * -2, black);
  
  pixel(pixelSize * 2, pixelSize * -1, black);
  pixel(pixelSize * 2, 0, black);
  pixel(pixelSize * 2, pixelSize, black);
  
  pixel(pixelSize * -2, pixelSize * -1, black);
  pixel(pixelSize * -2, 0, black);
  pixel(pixelSize * -2, pixelSize, black);
  
  pop();
  
  
  
  
  rotate(playerRot);
  translate(playerX * -1, playerY * -1);
  
  
  //circle(110, 80, 10);
  
  //print("Drawing rocks...");
  
  rock(0.01, 30.1, 3);
  rock(0.01, -30.1, 1);
  rock(-110, 24, 2.4);
  rock(260, -300, 30);
  rock(180, -100, 3.3);
  rock(-70, -210, 2.5);
  rock(-60, -10, 0.3);
  rock(330, -490, 2.2);
  rock(-420, -630, 2);
  rock(-450, -660, 0.5);
  rock(-457, -640, 0.5);
  rock(-453, -600, 0.5);
  rock(-418, -653, 0.5);
  rock(-370, -650, 0.5);
  rock(-387, -604, 0.5);
  
  //print(canvCoords(0.01, 30.1)[0] + " " + canvCoords(0.01, 30.1)[1]);
  //noLoop();
}

