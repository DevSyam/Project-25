
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;

var ground1;

var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,490,1200,20);

	ball1 = new Ball(200,475,30);

	dustbin1 = new Dustbin(1013,410,10,120);
	dustbin2 = new Dustbin(880,410,10,120);
	dustbin3 = new Dustbin(945,475,120,5);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ball1.display();
  
  keyPressed();

  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:10,y:-25});
		ball1.velocityY = ball1.velocityY + 10;

	}
}



