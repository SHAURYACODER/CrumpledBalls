const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var dustbinC1,dustbinC2,dustbinB;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1200,20);
	ball = new Ball(100,100,40);

	dustbinC1=new Dustbin(500,615,20,100);
	dustbinC2=new Dustbin(700,615,20,100);
	dustbinB=new Dustbin(600,660,200,20);

	Bbase=new Dustbin(100,300,50,20);
	Brod=new Dustbin(100,425,50,500)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  keyPressed();

  ball.display();
  ground.display();

  dustbinC1.display();
  dustbinC2.display();
  dustbinB.display();

  Bbase.display();
  Brod.display();
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:1});
		
	}
}