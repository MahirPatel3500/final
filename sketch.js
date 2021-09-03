var hockey,hockeyimg;
var line,line1,line2,line3,line2,line5,line6;
var stricker , strickerimg;
function preload(){
  hockeyimg = loadImage("images.jpg");
  strickerimg = loadImage("stricker.png")
  }



  function setup(){ 
  createCanvas(1690,1000);
 
  hockey = createSprite(240,360);
  hockey.addImage(hockeyimg)
  hockey.scale = 2.5
  hockey.rotate

  line = createSprite(245,365,450,10)
  line.visible = true;
  

  line1 = createSprite(20,360,8,690)
  line1.visible = true;

  line3 = createSprite(460,360,8,690)
  line3.visible = true;

  line4 = createSprite(100,20,160,10) 
  line4.visible = true; 

  line2 = createSprite(385,20,160,10)
  line2.visible = true;

  line5 = createSprite(100,695,160,10)
  line5.visible = true;
  
  line6 = createSprite(385,695,160,10)

  stricker = createSprite(285,415,20,10)
  stricker.addImage(strickerimg)
  stricker.scale = 0.19
  //stricker.y = World.mouseY
  stricker.velocityX = -8
  stricker.velocityY = 8


  

}
    



function draw() {
  background(0);
  drawSprites();
  
    stricker.bounceOff(line1)
    stricker.bounceOff(line2)
    stricker.bounceOff(line3)
    stricker.bounceOff(line4)
    stricker.bounceOff(line5)
    stricker.bounceOff(line6)
}




