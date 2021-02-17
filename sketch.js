const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup(){
   createCanvas(1200,700)

   engine = Engine.create();
   world = engine.world
   Engine.run(engine)
  ground1 = new Ground(450,390,900,20)
   box1 = new Blocks (300,200,30,40);
  

   
   
  
}

function draw(){
    background(0)

    ground1.display();
    box1.display();
    drawSprites();
}