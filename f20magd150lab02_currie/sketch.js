function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(0, 0, 0);
  
  colorMode(RGB, 255);
  fill(0, 0, 110);
  arc(200, 250, 400, 200, PI, TWO_PI);
  
  fill(139, 69, 19);
  beginShape();
    vertex(120, 160);
    vertex(130, 167);
    vertex(138, 165);
    vertex(150, 172);
    vertex(167, 173);
    vertex(178, 170);
    vertex(183, 165);
    vertex(187, 173);
    vertex(193, 173);
    vertex(195, 170);
    vertex(205, 172);
    vertex(210, 167);
    vertex(213, 170);
    vertex(225, 167);
    vertex(227, 156);
    vertex(231, 171);
    vertex(240, 174);
    vertex(240, 179);
    vertex(237, 182);
    vertex(238, 185);
    vertex(272, 192);
    vertex(275, 195);
    vertex(295, 190);
    vertex(313, 190);
    vertex(332, 195);
    vertex(380, 250);
    vertex(20, 250);
  endShape(CLOSE);
  
  arc(200, 250, 400, 200, PI, PI * 1.267);
  
  fill('#d78000');
  beginShape();
    vertex(198, 200);
    vertex(202, 200);
    vertex(206, 204);
    vertex(202, 208);
    vertex(194, 204);
  endShape(CLOSE);
  
  push();
    colorMode(HSB, 360, 100, 100, 100);
    fill(210, 50, 50);
  
    beginShape();
      vertex(38, 230);
      vertex(52, 224);
      vertex(57, 229);
      vertex(62, 227);
      vertex(63, 223);
      vertex(78, 209);
      vertex(85, 210);
      vertex(87, 217);
      vertex(93, 218);
      vertex(91, 223);
      vertex(117, 236);
      vertex(115, 244);
      vertex(119, 250);
      vertex(130, 250);
      vertex(20, 250);
    endShape();
  pop();
  
  fill(160, 160, 160);
  quad(261, 114, 139, 114, 17, -58, 383, -58);
  quad(261, 114, 383, -58, 560, 300, 380, 250);
  quad(380, 250, 1100, 450, -700, 450, 20, 250);
  quad(139, 114, 20, 250, -700, 450, 17, -58);
  
  stroke(255, 255, 255);
  point(160, 130);
  point(230, 140);
  point(200, 120);
  point(235, 132);
  point(260, 140);
}