
var book,pen,board,car
function setup() {
  createCanvas(800,400);
  book = createSprite(505, 245, 50, 50);
 pen = createSprite(10, 352, 50, 50);
 board = createSprite(100, 246, 50, 50);
 car = createSprite(400, 154, 50, 50);
book.velocityX=-5
pen.velocityX=5
book.velocityY=1
pen.velocityY=-2

}

function draw() {
  background(255,255,255);  
  drawSprites();
bounceoff(book,pen);

}






