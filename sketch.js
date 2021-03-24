var track,carImg,obstacleImg;
var backgroundImg,car,obstacle;
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

 backgroundImg=createSprite(0,-displayHeight*4,displayWidth,displayHeight*5);
 backgroundImg.addImage(track);

 obstacle=createSprite(random(0,displayWidth-20),random(300,500),30,30);
 obstacle.addImage(obstacleImg);

 car=createSprite(displayWidth-20/2,displayHeight-30/2,50,50);
 car.addImage(carImg);

 // console.log(displayHeight)
 }

function draw() {
 background(rgb(198,135,103));

 //making car move with arrow keys
if(gameState==="play"){
 if(keyDown(LEFT_ARROW)){
    car.x=car.x-1;
 }
if(keyDown(RIGHT_ARROW)){
  car.x=car.x+1;
}
if(keyDown(UP_ARROW)){
  car.y=car.y-1;
}
}

//if the car hits the obstacle game is over  
if(car.x===obstacle.x && car.y===obstacle.y){
  textSize(20);
  fill("white");
  text("GAME OVER",displayWidth-20/2,displayHeight-30/2);
  gameState="end";
}

//setting camera directions
camera.position.x = displayWidth-20/2;
camera.position.y = car.y;

  drawSprites();
}