var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = +5;

 movingRect = createSprite(400,800,80,50);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;

  //gameObject1 = createSprite(100,100,80,80);
  //gameObject1.shapeColor = "green"

  //gameObject2 = createSprite(200,100,80,80);
  //gameObject2.shapeColor = "green"

  //gameObject3 = createSprite(300,100,80,80);
  //gameObject3.shapeColor = "green"

}

function draw() {
  background(0); 
 //x console.log(movingRect.x-fixedRect.x)

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  //if(isTouching(movingRect,gameObject1)){
   // movingRect.shapeColor = "blue";
   // gameObject1.shapeColor = "blue"
  //}else{
   // gameObject1.shapeColor = "green";
   // movingRect.shapeColor = "green";
  //}
  
  
  bounce(movingRect,fixedRect);
  
  drawSprites();
}