var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameoObject1 = createSprite(100,100,50,50);
  gameoObject1.shapeColor = "green";
  gameoObject1.debug = true;
  gameoObject2 = createSprite(400,100,50,80);
  gameoObject2.shapeColor = "green";
  gameoObject2.debug = true;
  gameoObject3 = createSprite(400,800,80,30);
  gameoObject3.shapeColor = "green";
  gameoObject3.debug = true;
  gameoObject4 = createSprite(600,100,50,50);
  gameoObject4.shapeColor = "green";
  gameoObject4.debug = true;
  gameoObject2.velocityY = 5
  gameoObject3.velocityY = -5
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceOff(gameoObject2,gameoObject3)
  if (isTouching(movingRect,gameoObject1)) {
    movingRect.shapeColor = "blue";
    gameoObject1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameoObject1.shapeColor = "green";
  }
  drawSprites();
}

