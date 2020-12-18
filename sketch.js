
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup,obstacleGroup;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();

}


function draw() {

  background("white");
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  monkey.collide (ground);
  
  
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  
  Fruits();
  Obstacles();
  drawSprites();
}

function Fruits(){
  if (frameCount%80===0){
    banana=createSprite(600,120,40,10);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    
    banana.scale=0.12 ;
    banana.velocityX=-6;
    
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
}

function Obstacles(){
  if(frameCount%300===0){
    obstacles=createSprite(600,315,10,40);
    obstacles.addImage(obstacleImage);
    obstacles.scale=0.2;
    obstacles.velocityX=-6;
    
    obstacles.lifetime=200;
    obstacleGroup.add(obstacles);
  }
}


