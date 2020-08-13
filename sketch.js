const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImg, ground, stone, boy, boyImg, mango1, mango2, mango3, mango4, sling;

function preload()
{
	treeImg=loadImage("Plucking mangoes/tree.png");
	boyImg=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	tree=createSprite(500,400,300,10);
	tree.scale=0.5;
	tree.addImage(treeImg);
	boy=createSprite(200,600,50,100);
	boy.scale=0.2;
	boy.addImage(boyImg);
	ground= new Ground(400,695,800,10);
	stone= new Stone(250,600);
	mango1=new Mango(400,420);
	mango2=new Mango(300,400);
	mango3=new Mango(350,410);
	mango4=new Mango(500,380);
	tb1= new Tb(400,445);
	tb2= new Tb(300,425);
	tb3= new Tb(350,435);
	tb4= new Tb(500,405);
	//sling= new Sling(stone.body,{x:150, y:600}, -100, 0);
	sling = new Sling(stone.body,{x:100, y:500})
	//sling = new Sling();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  sling.display();
  tb1.display();
  tb2.display();
  tb3.display();
  tb4.display();

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
       
       Matter.Body.setPosition(stone.body,{x:100,y:500})
        sling.attach(stone.body);
        
    }
}

