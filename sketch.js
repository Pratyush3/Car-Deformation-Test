var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,420);
  car = createSprite(50,200,50,50);
 wall = createSprite(1500,200,60,height/2);
 speed=random(55,90);
 weight=random(400,1500);
}

function draw() {
  background(255,255,255);
  wall.shapeColor = color(80,80,80); 
  car.velocityX=speed;
if (wall.x-car.x < (car.width+wall.width)/2){
car.velocityX=0;
wall.depth=car.depth;
car.depth=car.depth+1;
var deformation = 0.5*weight*speed*speed/25509;
if (deformation>180){
 car.shapeColor=color(255,0,0);
 text("Deformation = Leathal",1400,370);
}
if (deformation<180 && deformation>100){
car.shapeColor=color(230,230,0);
text("Deformation = Moderate",1400,370);
}
if (deformation<100){
car.shapeColor=color(0,255,0);
text("Deformation = Normal",1400,370);
}
}
text ("Deformation = "+deformation,1400,350);
text("Speeed = "+speed,1400,390);
text("Weight = "+weight,1400,410);
  drawSprites();
}