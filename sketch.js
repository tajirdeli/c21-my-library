var a1,b1,c,d,edges


function setup() {
  createCanvas(800,400);
  a1=createSprite(200, 200, 50, 50);
  b1=createSprite(400, 200, 50, 50);
  c=createSprite(100,250,50,50);
  d=createSprite(700,250,50,50)
  edges=createEdgeSprites()
a1.shapeColor="green"
b1.shapeColor="green"
c.shapeColor="green"
d.shapeColor="green"
c.velocityX=5
d.velocityX=-5
}

function draw() {
  background(255,255,255);  
  a1.x=mouseX
  a1.y=mouseY
  bounce(c,d)

c.bounceOff(edges);
d.bounceOff(edges)
  if (touching(a1,b1)){
    a1.shapeColor="red"
b1.shapeColor="red"
  }
else{a1.shapeColor="green"
b1.shapeColor="green"}

  drawSprites();
}










