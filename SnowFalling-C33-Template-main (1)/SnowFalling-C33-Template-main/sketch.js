var backimage
var snow
var snowimage



function preload(){
  backimage=loadImage ("snow2.jpg")
  snowimage = loadImage ("snow4.webp")
}

function setup() {
  createCanvas(800,400);
 snow=createSprite(400, 200, 50, 50);
 snow.addImage(snowimage)
 snow.scale=0.1
}


function draw() {
  background(backimage);  
  drawSprites();
}