function preload(){
  // preload assets
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  //BG rechtecke und Blau
  background('rgb(55, 61, 32)');
  fill('#6699CC');
  stroke(0, 0, 0, 0);
  rect(0, 40, 290, 50);
  rect(0, 130, 450, 50);
  rect(300, 240, 300, 50);
  rect(0, 300, 185, 50);
  rect(250, 415, 350, 50);
  rect(0, 500, 400, 50);
  //großer oben rechts
  fill('rgba(255, 0, 76, 0.88)');
  arc(400, 120,
      250, 250,
      Math.PI / 180 * 20,
      Math.PI / 180 * 200,
      CHORD);
  fill(0);
  arc(400, 120,
      150, 150,
      Math.PI / 180 * 90,
      Math.PI / 180 * (180+90),
      CHORD);
  stroke(0)
  strokeWeight(10)
  fill('rgb(198, 192, 19)');
  arc(400, 120,
      100, 100,
      Math.PI / 180 * (180+90),
      Math.PI / 180 * 90,
      CHORD);
  //mittle großer kreis in der mitte
  fill('rgba(198, 192, 19, 0.88)');
  strokeWeight(0)
  arc(140, 300,
      200, 200,
      Math.PI / 180 * 200,
      Math.PI / 180 * 100,
      CHORD);
      stroke(0)
  strokeWeight(10)
  fill('rgb(198, 192, 19)');
  arc(90, 328,
      80, 80,
      Math.PI / 180 * 90,
      Math.PI / 180 * (180+90),
      CHORD);
  fill(0);
  stroke(0)
  strokeWeight(10)
  arc(90, 328,
      80, 80,
      Math.PI / 180 * (180+90),
      Math.PI / 180 * 90,
      CHORD);
  //kleiner kreis
  stroke(0)
  strokeWeight(10)
  fill('rgba(255, 0, 76, 0.88)');
  circle(420, 500, 100);
}

function keyReleased() {
  save('art.deco.task-01.png');
}