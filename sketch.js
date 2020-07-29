
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinko = [];
var divisions = [];

var divisionHeight = 300;


var ground ;

var score =0 ;

var particle;

var gameState = 0;

count = 0;
function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(230,795,500,10);

 for(var k =0; k<= innerWidth; k =k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2, 10,divisionHeight));
 }
  for (var j = 15; j <=width; j=j+50){
    plinko.push(new Plinkos(j,75,10));
  }
 
  for (var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinkos(j,275,10));
  }

  for (var j = 30; j <=width-10; j=j+50){
    plinko.push(new Plinkos(j,175,10));
  }
  
 line = new Divisions(240,400,480,20)
}


function draw() {
  background(0);
  Engine.update(engine);


ground.display();

for(var a = 0; a < divisions.length ; a ++ ){
  divisions[a].display();
}

for (var b = 0; b < plinko.length; b++ ){
  plinko[b].display();
}
stroke("blue")
strokeWeight(5)
textSize(30)
text("score :"+score,330,40);
text("500",10,550)
text("500",90,550)
text("100",170,550)
text("100",250,550)
text("200",330,550)
text("200",410,550)

if (particle!=null)
{
    particle.display();
     if(particle.body.position.y>760)
    {
          if (particle.body.position.x<300)
           {
               score = score+500;
               particle = null;
               if(count>=5)gameState = "end";
            }

    }
}
mousePressed();
}

function mousePressed(){
  console.log("gameState"+gameState)
  if (gameState!== 1){
    console.log(123)
   count ++;
   particle = new Particles(mouseX,mouseY,10,10);
  }
  line.display();
}
