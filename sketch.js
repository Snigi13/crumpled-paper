var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	paper1=new paper (50,100,width,height); 
	box1= new dustbin(370,300,20,200);
	box2=new dustbin(200,300,20,200);
	box3=new dustbin(270,300,260,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



