var dustbin;
var paperObject,paper;
var ground;
var box1;
var box2;
var box3;
var world,engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 dustbinImage=loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground=new Ground(400,680,800,20);
	paper=new Paper(20,20,40,40);
	
	
	
	 box1=new Dustbin(400,660,200,20);
	box2=new Dustbin(300,620,20,100);
	box3=new Dustbin(500,620,20,100);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  //rect(box1.position.x,box1.position.y,300,30);
  //rect(box2.position.x,box2.position.y,30,60);
 // rect(box3.position.x,box3.position.y,30,60);
  Ground.display();
  paper.display();
 box1.display();
 box2.display();
 box3.display();
 image(dustbinImage,300,500,200,150)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-60})
	}
}



