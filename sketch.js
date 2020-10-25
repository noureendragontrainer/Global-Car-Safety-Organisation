var car1, car2;
var speed1, speed2;
var weight1, weight2;
var collider1,collider2;
var deform1, deform2;


function setup() {
  createCanvas(1600,400);
  speed1 = Math.round(random(20,150));
  speed2 = Math.round(random(20,120));
  weight1 = Math.round(random(100,1200));
  weight2 = Math.round(random(100,1200));

  car1 = createSprite(20, 100, 50,50);
  car1.velocityX = speed1;
  car1.shapeColor = "blue";

  car2 = createSprite(20,300,50,50);
  car2.velocityX = speed2;
  car2.shapeColor = "blue";

  collider1 = createSprite(1450,100,20,180);
  collider1.shapeColor = "black";
  collider2 = createSprite(1450,300,20,180);
  collider2.shapeColor = "black";

  deform1 = (0.5*weight1*speed1*speed1)/22500;
  deform2 = (0.5*weight2*speed2*speed2)/22500;
}

function draw() {
  background(80,80,80);  

  if (car1.x + 25 > collider1.x - 10){
    car1.velocityX = 0;
    if (deform1<=100){
      car1.shapeColor = "green";
    }
    else if(deform1>100&&deform1<200){
      car1.shapeColor = "yellow";
    }
    else if (deform1>=200){
      car1.shapeColor = "red";
    }
  }
  if (car2.x + 25 > collider2.x - 10){
    car2.velocityX = 0;
    if (deform2<=100){
      car2.shapeColor = "green";
    }
    else if(deform2>100&&deform2<200){
      car2.shapeColor = "yellow";
    }
    else if (deform2>=200){
      car2.shapeColor = "red";
    }
  }

  drawSprites();
  stroke("red");
  line(0,200,1600,200);

}