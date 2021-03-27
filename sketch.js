var track,carImg,obstacleImg;
var bgImg,car,obstacle;
var gameState="play";

function preload() {

  //preloading images

 track=loadImage("images/track.png");
 obstacleImg=loadImage("images/stone.png");
 carImg=loadImage("images/racing car.png");
  
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  //creating sprites

 bgImg=createSprite(displayWidth,displayHeight);
 bgImg.addImage(track);

 obstacle=createSprite(random(150,600),random(300,500),30,30);
 obstacle.addImage(obstacleImg);

 car=createSprite(displayWidth-20/2,displayHeight-30/2,50,50);
 car.addImage(carImg);
 car.setCollider("rectangle",0,100,250,250);

 // console.log(displayHeight)
 }

function draw() {
 background(rgb(198,135,103));

 //making car move with arrow keys
if(gameState==="play"){
 if(keyDown(LEFT_ARROW)){
    car.x=car.x-10;
 }
if(keyDown(RIGHT_ARROW)){
  car.x=car.x+10;
}
if(keyDown(UP_ARROW)){
  car.y=car.y-10;
}
}

//if the car hits the obstacle game is over  
if(car.isTouching(obstacle)){ 
  car.destroy();
  obstacle.destroy(); 
  gameState="end"; } 

  //setting camera directions
camera.position.x = displayWidth-20/2;
camera.position.y = car.y;

if(gameState==="end"){
  textSize(40);
  fill("white")
  stroke("black");
  strokeWeight(8);
  text("GAMEOVER!!!!",650,600);
}

  drawSprites();
}