const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground1;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(200,790,600,20);

}

function draw() {
  background("black"); 
  Engine.update(engine);

  ground1.display();

  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75, 10));
  }

  for(var j = 20; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j, 175, 10));
  }

  for(var j = 0; j <= width; j = j+50){
    plinkos.push(new Plinko(j, 275, 10));
  }

  for(var j = 20; j <= width-10; j = j+50){
    plinkos.push(new Plinko(j, 375, 10));
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(10, 470), 10, 10))
  }

  for(var n = 0; n < particles.length; n++){
    particles[n].display();
  }

  drawSprites();
}