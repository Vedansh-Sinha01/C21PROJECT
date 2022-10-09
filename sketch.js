
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj;
var leftside;

function preload()
{
	
}
function setup() {
	createCanvas(900,800);
	
	leftside=new ground(1100,600,20,120);
	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
		}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	ball= Matter.Bodies.circle(x,y,10,ball_options);
	World.add(world,ball,ball_options)
	groundObj=new ground(width/2,670,width,20);
	World.add(world,groundObj)
    leftside=new ground(1100,600,20,120);
	World.add(world,leftside)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);
  rect(groundObj.position.x,groundObj.position.y,width,20);
  rect(leftside.position.x,leftside.position.y,20,120);
  drawSprites();
  groundObj.display();
  leftside.display();
}



