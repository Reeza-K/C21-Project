var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,50,20);
  wall=createSprite(800,200,thickness,height/2);
}

function draw() {
  background(0);

  bullet.velocityX= speed;
  bullet.shapeColor=color(255,255,255);
  wall.shapeColor=color(80,80,80);

 /* if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var def=( 0.5*weight*speed*speed)/22509;
    if(def>180){
      bullet.shapeColor=color(255,0,0);
    }
    if(def<180 && def>100){
      bullet.shapeColor=color(230,230,0);
    }
    if(def<100){
      bullet.shapeColor=color(0,255,0);
    }
  }*/

  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);


    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}
function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}