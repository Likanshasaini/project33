
var backward,backwardImg;
var snow,snowImg,snow2,snow2Img;
var ground,sound;

function setup() {
  createCanvas(900,700);
}

function preload(){
snowImg=loadImage("snow5.webp");
snow2Img=loadImage("snow4.webp");
backwardImg=loadImage("snow3.jpg");


}


function draw() {
background(backwardImg);
ground=createSprite(100,880,800,10);

if(frameCount%50===0){
snow = createSprite(random (20,890),random(20,40),20,20);
snow.addImage("ice",snowImg);
snow.scale=0.1;
snow.velocityY=1;
snow.lifetime=900;
snow.collide(ground);
}

if(frameCount%70===0){
  snow2 = createSprite(random (20,890),random(20,40),20,20);
  snow2.addImage("ice",snow2Img);
  snow2.scale=0.1;
  snow2.velocityY=1;
  snow2.lifetime=900;
  snow2.collide(ground);
  }


  


drawSprites();

}