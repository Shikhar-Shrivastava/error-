
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background(100,100,100)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(50,50)
	rect1 = new Rect(400,50,800,30)

	rope1 = new Rope(bob1.body,rect1.body,20,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  rect1.display();
  bob1.display();
  //rope.display();
  
  drawSprites();
 
}



