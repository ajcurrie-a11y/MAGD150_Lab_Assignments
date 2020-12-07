//Pop sound downloaded from freesound.org.
//Contributed by deraj under the Creative Commons 0 License.


var videoCapture;
var oscill;
var title;


function preload() {
    soundFormats("wav");
  
    popSound = loadSound('202230__deraj__pop-sound.wav');
  
    
}

function setup() {

  title = createElement("h2", "Black Mirror");
  
  createCanvas(400, 400);
  
  videoCapture = createCapture(VIDEO);
  videoCapture.hide();
  
  oscill = new p5.Oscillator();
  oscill.setType("sawtooth");
  oscill.amp(0.1);
  oscill.start();
  
  
  title.position(125, 20);
  
}

function draw() {
  //Since the canvas will be inverted, set the background to rgb(0, 0, 0) instead of rgb(255, 255, 255).
  background(0, 0, 0);
  
  
  //Draw the frame of the mirror.
  push();
    strokeWeight(2);
    fill(255, 0, 60);  
    rect(40, 77, 320, 245);
  pop();
  
  image(videoCapture, 50, 87, 300, 225);
  filter(INVERT);
  
  //Draw the bars in the mirror.
  for (let x = 80; x < 350; x += 282 / 6) {
    
    push();
      strokeCap(SQUARE);
      strokeWeight(15);
      line(x, 87, x, 312);
    pop();
  }

  //Randomly, every second or so, make a popping sound.
  if (random(0, 60) < 1) {
    popSound.play();
  }
}
