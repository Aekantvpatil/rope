const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint;
var engine,world,rope2,ball1,ball2,rope3,ball3,ball4,ball5,rope4,rope5,rope6

function setup() {
  createCanvas(3000,800)
  engine = Engine.create();
  world = engine.world;

  
   ball1=new ball(200,200,80,80)
  rope2=new rope(ball1.body,{x:500,y:50})
   ball2=new ball(250,200,80,80)
   rope3=new rope(ball2.body,{x:500,y:50})
   ball3=new ball(300,200,80,80)
   rope4=new rope(ball3.body,{x:500,y:50})
   ball4=new ball(350,200,80,80)
   rope5=new rope(ball4.body,{x:500,y:50})
   ball5=new ball(400,200,80,80)
   rope6=new rope(ball5.body,{x:500,y:50})
}
function draw() {
background("black")
Engine.update(engine);


ball1.display()
rope2.display()
ball2.display()
rope3.display()
ball3.display()
rope4.display()
ball4.display()
rope5.display()
ball5.display()
rope6.display()
}

function mouseDragged(){
 
      Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
 
}