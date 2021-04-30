var bg1,bg2
var background
var edges
var red,redB
var pink,pinkB
var green,greenB
var blue,blueB
var bow,bowanimation
var arrow,arrowA;
var score;
var arrowGroup;
var redGroup,pinkGroup,greenGroup,blueGroup;
var text1;
var victory,victoryI;
var l




function preload(){
  bg1=loadAnimation("background0.png");
  redB=loadAnimation("red.png");
  pinkB=loadAnimation("pink.png");
  blueB=loadAnimation("blue.png");
  greenB=loadAnimation("green.png");
  bowanimation=loadAnimation("bow0.png");
 arrowA=loadAnimation("arrow0.png");
  victoryI=loadImage("victory.png")
  
}

function setup() {
     createCanvas(600, 600);
  score=0;
  back=createSprite(0,0,600,600)
  back.addAnimation("bck",bg1);
  back.scale=3;
  back.velocityX=-2;
  back.velocityY=0;

  edges = createEdgeSprites();
  
   
  
  bow=createSprite(550,100,10,20);
  bow.addAnimation("bw",bowanimation);
  
  arrowGroup = new Group();
  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  
  
}


function draw() {
  background("white");
  l=createSprite(550,300,5,600)
 
  
  
  
  
  if(back.x<0){
    back.x=back.width/2
  }
  bow.y=World.mouseY;
  
 if(keyWentDown("space")){
   arrowrelease();
  
   
  
 }
   if (arrowGroup.isTouching(redGroup)){
    arrowGroup.destroyEach();
    redGroup.destroyEach();
    score=score+1;
  }
 if (arrowGroup.isTouching(greenGroup)){
  arrowGroup.destroyEach();
   greenGroup.destroyEach();
   score=score+2;
 }
  if (arrowGroup.isTouching(blueGroup)){
    arrowGroup.destroyEach();
    blueGroup.destroyEach();
    score=score+3;
  }
  if (arrowGroup.isTouching(pinkGroup)){
    arrowGroup.destroyEach();
    pinkGroup.destroyEach();
    score=score+4;
  }
  if(redGroup.isTouching(l)){
    score=score-1;
  }
 
  
  
  
  var choose= Math.round(random(1,4))
  if(frameCount%80==0){
    if(choose===1){
      greenballon();
    }
    else if(choose===2){
      redballon();
    }
    else if(choose===3){
      blueballon();
    }
    else if(choose===4){
      pinkballon();
    }
   
    
  }
  
  
  
  
  
  
 
   
  drawSprites();
  
  textSize(20)
  text("Score : " + score,500,40);
  if(score>=25){
    fill("yellow")
    text1=text("CONGRATULATIONS for bursting 25 ballons",100,20);
   
    victory=createSprite(300,300,800,800)
    victory.addImage(victoryI)
    
   
   
}
}

function arrowrelease(){
  arrow=createSprite(bow.x-5,bow.y,10,2);
   arrow.addAnimation("shoot",arrowA)
   arrow.scale=0.25;
   arrow.velocityX=-4;
  arrow.lifetime=300;
  arrowGroup.add(arrow)
  
  
}
function greenballon(){
  
  
    green=createSprite(0,random(100,500),10,10)
   green.addAnimation("g",greenB)
   green.scale=0.08;
    green.velocityX=2;
    green.lifetime=300;
  greenGroup.add(green);
  
  
 
}
function blueballon(){
  
 
    blue=createSprite(0,random(100,500),10,10)
   blue.addAnimation("g",blueB)
   blue.scale=0.08;
    blue.velocityX=2;
    blue.lifetime=300;
  blueGroup.add(blue);
  
  
}
function pinkballon(){
  
  
    pink=createSprite(0,random(100,500),10,10)
   pink.addAnimation("g",pinkB)
   pink.scale=1;
    pink.velocityX=2;
    pink.lifetime=300;
 pinkGroup.add(pink);
 
   
    
  
}
function redballon(){
  
  
   red=createSprite(0,random(100,500),10,10)
   red.addAnimation("g",redB)
   red.scale=0.08;
   red.velocityX=2;
   red.lifetime=300;
  redGroup.add(red);
  
    

}