var ball;

function setup() {
console.log("Hello")
  createCanvas(800, 400);
  ball=createSprite(200,200,70,70)
  console.log(ball)
  ball.debug=true
  ball.setCollider("circle",0,0,50)
}

function draw() {
 
  background(0);
  if (keyIsDown(RIGHT_ARROW))
  {
    ball.x=ball.x+10;
  }
  if (keyIsDown(LEFT_ARROW))
  {
    ball.x=ball.x-10;
  }
  if (keyIsDown(DOWN_ARROW))
  {
    ball.y=ball.y+10;
  }
  if (keyIsDown(UP_ARROW))
  {
    ball.y=ball.y-10;
  }


  drawSprites() 
}