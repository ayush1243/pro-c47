
var boy1Img;
var obs1Img,obs2Img,obs3Img,obs4Img,obs5Img;


function preload()
{
	boy1Img=loadAnimation("boy1.png","boy2.png","boy3.png");
  obs1Img=loadImage("obs1.png");
  obs2Img=loadImage("obs2.png");
  obs3Img=loadImage("obs3.png");
  obs4Img=loadImage("obs4.png");
  obs5Img=loadImage("obs5.png");
}

function setup() {
	createCanvas(600,200);
 ground=createSprite(0,200,600,20);
ground.velocityX=-2;
edges=createEdgeSprites();
jack=createSprite(50,152,20,20);
jack.addAnimation("runnning",boy1Img);
jack.scale=0.3;

obstaclesGroup=createGroup();
	//Create the Bodies Here.


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(ground.x<0){
	  ground.x=ground.width/2;
  }
  if(keyDown("space")){
    jack.velocityY=-15;
  }
  jack.velocityY=jack.velocityY+2;
if(obstaclesGroup.isTouching(jack)){
  jack.velocityX=0;
  ground.velocityX=0;
  textSize(30);
  text("Game Over",100,100);
  jack.changeAnmation(boy1Img);
}  
 
  spawnObstacles();
  jack.collide(edges);
  drawSprites();
 
}


function spawnObstacles(){
  if(frameCount%60==0){
    var obstacle=createSprite(random(400,600),random(100,320),10,40);
    obstacle.velocityX=-6;
    var rand=Math.round(random(1,5));
    switch(rand){
      case 1:obstacle.addImage(obs1Img);
      break;
      case 2:obstacle.addImage(obs2Img);
      break;
      case 3:obstacle.addImage(obs3Img);
      break;
      case 4:obstacle.addImage(obs4Img);
      break;
      case 5:obstacle.addImage(obs5Img);
      break;
    }
    obstaclesGroup.add(obstacle);
    obstacle.scale=0.5;

  }
}
