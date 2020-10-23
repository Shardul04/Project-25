const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin1,dustbin2;

function preload()
{
	
}

function setup() {
	createCanvas(1093, 520);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
   ball = new Paper(50,50,50);
  ground = new Ground(400,445,1800,10);
  dustbin1 = new Dustbin_1(930,400,240,10); 
  dustbin2 = new Dustbin_2(930,400,240,10); 	
	Engine.run(engine);
}


function draw() {
	
  rectMode(CENTER);
  background("Grey");

  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  
  drawSprites();
 
}

function keyPressed(){
	
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-130})
	}
	}