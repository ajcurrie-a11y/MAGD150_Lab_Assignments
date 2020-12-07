//Generative, interactive art in which the user gives a selection of flowers, and they go through a simulated competition for nutrients. Instructions on line 120.


var flowers = [];
var nutrientSupply = 0.2;


function drawPetal(x, y, angle, length, width, color) {
  
  push();
    fill(color);
    
    translate(x, y);
    rotate(angle);
  
    ellipse(length / 2, 0, length, width);
    
  pop();
  
  //print("Drew petal at x: " + x + " y: " + y + "a: " + angle);
}


class Flower {
  constructor(x, y, petalCount, centerColor, petalColor, growthRate, maxSize) {
    this.x = x;
    this.y = y;
    this.petalCount = petalCount;
    this.centerColor = centerColor;
    this.petalColor = petalColor;
    this.growthRate = growthRate;
    this.maxSize = maxSize;
    
    this.size = 2;
    
    
    //Add this flower to the array of flowers and set its id to be its index in the array.
    
    //Try to add this flower in an empty slot in the array.
    let pushSuccessful = false;
    for (let i = 0; i < flowers.length && !pushSuccessful; i++) {
      if (flowers[i] == null) {
        flowers[i] = this;
        pushSuccessful = true;
        this.id = i;
      }
    }
    
    //If that fails, add it to the end of the array.
    if (!pushSuccessful) {
      //print("Appended flower to end of array");
      this.id = flowers.length;
      flowers[flowers.length] = this;
    }
  }
  
  draw() {
    
    //print("Drawing flower...");
    
    let dAngle = (PI * 2) / this.petalCount;
    
    //print("Drawing petals...");
    for (let i = 0; i < this.petalCount; i++) {
      let angle = dAngle * i;
      
      drawPetal(this.x, this.y, angle, this.size * 3, this.size / 2, this.petalColor);
    }
    //print("Finished drawing petals. ");
    
    push();
      fill(this.centerColor);
      circle(this.x, this.y, this.size * 2);
    pop();
  }
  
  simulate() {
    //print("Simulating flowr...");
    let nutrients = nutrientSupply / flowers.length;
    
    //If this flower is getting its basic nutrients requirement and is smaller than its maximum size, make it grow.
    if (nutrients >= this.growthRate && this.size < this.maxSize) {
        this.size += this.growthRate;
        
        //print("Size: " + this.size);
    }
    
    if (nutrients < this.growthRate){
      this.kill();
      return;
    }
    
    //If this flower is getting a surplus of nutrients and it is at its matured size, make it reproduce.
    if (nutrients >= this.growthRate * 2 && this.size >= this.maxSize) {
        this.reproduce();
        return;
    }
  }
  
  reproduce() {
    for (let i = 0; i < 2; i++) {
      let offSetX = random(-20, 20);
      let offSetY = random(-20, 20);
      
      new Flower(this.x + offSetX, this.y + offSetY, this.petalCount, this.centerColor, this.petalColor, this.growthRate, this.maxSize);
    }
    
    this.kill();
  }
  
  kill() {
    flowers[this.id] = null;
    //print("Killed flower.");
  }
}

function setup() {
  createCanvas(400, 400);
  
  print("INSTRUCTIONS");
  print("------------");
  print("s: plant sunflower");
  print("b: plant blue flower");
  print("g: plant green flower");
  print("Watch as your flowers reproduce and compete against each other!");
}

function keyReleased() {
  if (keyCode == 66) {
        new Flower(mouseX, mouseY, 8, color(0, 0, 255), color(110, 110, 255), 0.0025, 3.6);
    } else if (keyCode == 83) {
        new Flower(mouseX, mouseY, 20, color(0, 0, 0), "yellow", 0.01, 10);
    } else if (keyCode == 71) {
        new Flower(mouseX, mouseY, 4, color(0, 255, 0), color(0, 255, 0), 0.001, 50);
    }
}

function draw() {
    background(70, 70, 0);  
    
    //print(keyCode);
  
    
  
    /*if (floor(random(0, 500)) == 0) {
      let x = random(0, 400);
      let y = random(0, 400);
      
      switch (floor(random(0, 3))) {
        case 0:
          new Flower(x, y, 20, color(0, 0, 0), "yellow", 0.01, 10);
        case 1:
              new Flower(x, y, 4, "green", "green", 0.001, 50);
              
        case 2:
          new Flower(x, y, 8, "blue", "white", 0.0025, 3.6);
              
        case 3:
              
        case 4:
      
      }
    }*/
  
    //print("Flowes.length: " + flowers.length);
  
    //Simulate and draw every flower.
    for (let i = 0; i < flowers.length; i++) {
      //print("Flower " + i + ":");
      
      //print(flowers[i] == null);x
      if (flowers[i] != null) {
        //print("Flowers[i].size: " + flowers[i].size);
        flowers[i].simulate();
        
        if (flowers[i] != null) {
          flowers[i].draw();
        }
      }
    }
}