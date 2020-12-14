const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground

var paperBall

var dustbinWall1, dustbinWall2, dustbinWall3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,625,800,20)

	dustbinWall1 = new Dustbin(600,610,150,20)
	dustbinWall2 = new Dustbin(525,565,20,100)
	dustbinWall3 = new Dustbin(675,565,20,100)

	paperBall = new Paper(25,600)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinWall1.display()
  dustbinWall2.display()
  dustbinWall3.display()

  ground.display()

  paperBall.display()

  drawSprites();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(paperBall.paper, paperBall.paper.position, {x:65, y:-65})
	}
}
