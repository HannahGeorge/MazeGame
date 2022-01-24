let timer = 30;
var ballimg,ball;
var wall;
var edges;
var PLAY = 0;
var WON = 1;
var OVER = 2;
var gameState = PLAY; 

var trophy, trophyImg;
var retry;

var horizontalWall;
var hwa1, hwa2, hwa3, hwa4, hwa5, hwa6, hwa7,
    hwb1, hwb2, hwb3, hwb4,hwb5,
    hwc1, hwc2, hwc3, hwc4,
    hwd1, hwd2, hwd3, hwd4,
    hwe1, hwe2, hwe3, hwe4, hwe5, hwe6,
    hwf1, hwf2,
    hwg1, hwg2, hwg3, hwg4, hwg5,
    hwh1, hwh2, hwh3, hwh4, hwh5,
    hwi1, hwi2, hwi3, hwi4, hwi5, hwi6,
    hwj1, hwj2, hwj3,
    hwk1, hwk2, hwk3, hwk4, hwk5,
    hwl1, hwl2, hwl3, hwl4,
    hwm1, hwm2, hwm3, hwm4, hwm5,
    hwn1, hwn2, hwn3, hwn4,
    hwo1, hwo2, hwo3, hwo4, hwo5,
    hwp1, hwp2, hwp3, hwp4, hwp5,
    hwq1, hwq2, hwq3,
    hwr1, hwr2, hwr3, hwr4, hwr5,
    hws1, hws2, hws3, hws4, hws5, hws6; 

var vwa1, vwa2, vwa3, vwa4,
    vwb1, vwb2, vwb3, vwb4, vwb5, vwb6, vwb7,
    vwc1, vwc2, vwc3, vwc4,
    vwd1, vwd2, vwd3, vwd4, vwd5,
    vwe1, vwe2, vwe3, vwe4,
    vwf1, vwf2, vwf3, vwf4, vwf5,
    vwg1, vwg2, vwg3, vwg4, vwg5,
    vwh1, vwh2, vwh3, vwh4, vwh5, vwh6,
    vwi1, vwi2, vwi3, vwi4, vwi5, vwi6,
    vwj1, vwj2, vwj3, vwj4, vwj5,
    vwk1, vwk2, vwk3, vwk4, vwk5,
    vwl1, vwl2, vwl3, vwl4,
    vwm1, vwm2, vwm3, vwe4, vwm5, vwm6, vwm7,
    vwn1, vwn2, vwn3, vwn4,
    vwo1, vwo2, vwo3, vwo4, vwo5,
    vwp1, vwp2, vwp3, vwp4, vwp5,
    vwq1, vwq2, vwq3, vwq4, vwq5, vwq6, vwq7,
    vwr1, vwr2, vwr3, vwr4, vwr5,
    vws1, vws2, vws3, vws4, vws5; 

//vw1, vw2, 
   
function preload()
{
  ballimg = loadAnimation("images/ball1.png","images/ball22.png")
  
  trophyImg = loadImage("images/Gold_Trophy.png");
}

function setup() {
  createCanvas(900, 600);
  
  ball=createSprite(15,15,10,10)
  ball.addAnimation("runningboy",ballimg)
  ball.scale = 0.1
  
  trophy=createSprite(585,585,10,10);
  trophy.addImage(trophyImg);
  trophy.scale = 0.05;
  
  retry=createSprite(750,475,100,30)
  
  //hw1=createSprite(200,0,390,6);
  //hw1.shapeColor = "brown";
  //hw2=createSprite(510,0,180,6);
  //hw2.shapeColor = "brown";
  
  hwa1=createSprite(15,30,30,6);
  hwa1.shapeColor = "brown";
  hwa2=createSprite(105,30,90,6);
  hwa2.shapeColor = "brown";
  hwa3=createSprite(195,30,30,6);
  hwa3.shapeColor = "brown";
  hwa4=createSprite(285,30,30,6);
  hwa4.shapeColor = "brown";
  hwa5=createSprite(405,30,90,6);
  hwa5.shapeColor = "brown";
  hwa6=createSprite(495,30,30,6);
  hwa6.shapeColor = "brown";
  hwa7=createSprite(555,30,30,6);
  hwa7.shapeColor = "brown";
  
  hwb1=createSprite(90,60,60,6);
  hwb1.shapeColor = "brown";
  hwb2=createSprite(195,60,30,6);
  hwb2.shapeColor = "brown";
  hwb3=createSprite(285,60,30,6);
  hwb3.shapeColor = "brown";
  hwb4=createSprite(435,60,90,6);
  hwb4.shapeColor = "brown";
  hwb5=createSprite(525,60,30,6);
  hwb5.shapeColor = "brown";
  
  hwc1=createSprite(75,90,90,6);
  hwc1.shapeColor = "brown";
  hwc2=createSprite(270,90,180,6);
  hwc2.shapeColor = "brown";
  hwc3=createSprite(435,90,30,6);
  hwc3.shapeColor = "brown";
  hwc4=createSprite(585,90,30,6);
  hwc4.shapeColor = "brown";
  
  hwd1=createSprite(45,120,30,6);
  hwd1.shapeColor = "brown";
  hwd2=createSprite(120,120,60,6);
  hwd2.shapeColor = "brown";
  hwd3=createSprite(345,120,210,6);
  hwd3.shapeColor = "brown";
  hwd4=createSprite(555,120,30,6);
  hwd4.shapeColor = "brown";
  
  hwe1=createSprite(30,150,60,6);
  hwe1.shapeColor = "brown";
  hwe2=createSprite(135,150,30,6);
  hwe2.shapeColor = "brown";
  hwe3=createSprite(195,150,30,6);
  hwe3.shapeColor = "brown";
  hwe4=createSprite(285,150,30,6);
  hwe4.shapeColor = "brown";
  hwe5=createSprite(375,150,30,6);
  hwe5.shapeColor = "brown";
  hwe6=createSprite(540,150,60,6);
  hwe6.shapeColor = "brown";
  
  hwf1=createSprite(150,180,120,6);
  hwf1.shapeColor = "brown";
  hwf2=createSprite(435,180,210,6);
  hwf2.shapeColor = "brown";
  
  hwg1=createSprite(75,210,30,6);
  hwg1.shapeColor = "brown";
  hwg2=createSprite(150,210,60,6);
  hwg2.shapeColor = "brown";
  hwg3=createSprite(240,210,60,6);
  hwg3.shapeColor = "brown";
  hwg4=createSprite(375,210,150,6);
  hwg4.shapeColor = "brown";
  hwg5=createSprite(555,210,30,6);
  hwg5.shapeColor = "brown";
  
  hwh1=createSprite(15,240,30,6);
  hwh1.shapeColor = "brown";
  hwh2=createSprite(150,240,180,6);
  hwh2.shapeColor = "brown";
  hwh3=createSprite(315,240,30,6);
  hwh3.shapeColor = "brown";
  hwh4=createSprite(390,240,60,6);
  hwh4.shapeColor = "brown";
  hwh5=createSprite(525,240,90,6);
  hwh5.shapeColor = "brown";
  
  hwi1=createSprite(15,270,30,6);
  hwi1.shapeColor = "brown";
  hwi2=createSprite(120,270,60,6);
  hwi2.shapeColor = "brown";
  hwi3=createSprite(195,270,30,6);
  hwi3.shapeColor = "brown";
  hwi4=createSprite(285,270,30,6);
  hwi4.shapeColor = "brown";
  hwi5=createSprite(345,270,30,6);
  hwi5.shapeColor = "brown";
  hwi6=createSprite(480,270,60,6);
  hwi6.shapeColor = "brown";
  
  hwj1=createSprite(45,300,30,6);
  hwj1.shapeColor = "brown";
  hwj2=createSprite(315,300,150,6);
  hwj2.shapeColor = "brown";
  hwj3=createSprite(585,300,30,6);
  hwj3.shapeColor = "brown";
  
  hwk1=createSprite(30,330,60,6);
  hwk1.shapeColor = "brown";
  hwk2=createSprite(135,330,30,6);
  hwk2.shapeColor = "brown";
  hwk3=createSprite(285,330,150,6);
  hwk3.shapeColor = "brown";
  hwk4=createSprite(480,330,60,6);
  hwk4.shapeColor = "brown";
  hwk5=createSprite(555,330,30,6);
  hwk5.shapeColor = "brown";
  
  hwl1=createSprite(195,360,90,6);
  hwl1.shapeColor = "brown";
  hwl2=createSprite(285,360,30,6);
  hwl2.shapeColor = "brown";
  hwl3=createSprite(465,360,90,6);
  hwl3.shapeColor = "brown";
  hwl4=createSprite(585,360,30,6);
  hwl4.shapeColor = "brown";
  
  hwm1=createSprite(105,390,30,6);
  hwm1.shapeColor = "brown";
  hwm2=createSprite(165,390,30,6);
  hwm2.shapeColor = "brown";
  hwm3=createSprite(285,390,90,6);
  hwm3.shapeColor = "brown";
  hwm4=createSprite(435,390,90,6);
  hwm4.shapeColor = "brown";
  hwm5=createSprite(555,390,90,6);
  hwm5.shapeColor = "brown";
  
  hwn1=createSprite(105,420,150,6);
  hwn1.shapeColor = "brown";
  hwn2=createSprite(255,420,90,6);
  hwn2.shapeColor = "brown";
  hwn3=createSprite(375,420,30,6);
  hwn3.shapeColor = "brown";
  hwn4=createSprite(480,420,120,6);
  hwn4.shapeColor = "brown";
  
  hwo1=createSprite(45,450,90,6);
  hwo1.shapeColor = "brown";
  hwo2=createSprite(165,450,90,6);
  hwo2.shapeColor = "brown";
  hwo3=createSprite(285,450,30,6);
  hwo3.shapeColor = "brown";
  hwo4=createSprite(360,450,60,6);
  hwo4.shapeColor = "brown";
  hwo5=createSprite(495,450,30,6);
  hwo5.shapeColor = "brown";
  
  hwp1=createSprite(15,480,30,6);
  hwp1.shapeColor = "brown";  
  hwp2=createSprite(180,480,60,6);
  hwp2.shapeColor = "brown";
  hwp3=createSprite(420,480,60,6);
  hwp3.shapeColor = "brown";
  hwp4=createSprite(525,480,30,6);
  hwp4.shapeColor = "brown";
  hwp5=createSprite(585,480,30,6);
  hwp5.shapeColor = "brown";
  
  hwq1=createSprite(75,510,90,6);
  hwq1.shapeColor = "brown";  
  hwq2=createSprite(255,510,90,6);
  hwq2.shapeColor = "brown";
  hwq3=createSprite(345,510,30,6);
  hwq3.shapeColor = "brown";
  
  hwr1=createSprite(15,540,30,6);
  hwr1.shapeColor = "brown";
  hwr2=createSprite(105,540,90,6);
  hwr2.shapeColor = "brown";
  hwr3=createSprite(255,540,150,6);
  hwr3.shapeColor = "brown";
  hwr4=createSprite(390,540,60,6);
  hwr4.shapeColor = "brown";
  hwr5=createSprite(510,540,60,6);
  hwr5.shapeColor = "brown";
  
  hws1=createSprite(105,570,30,6);
  hws1.shapeColor = "brown";
  hws2=createSprite(165,570,30,6);
  hws2.shapeColor = "brown";
  hws3=createSprite(225,570,30,6);
  hws3.shapeColor = "brown";
  hws4=createSprite(330,570,60,6);
  hws4.shapeColor = "brown";
  hws5=createSprite(465,570,30,6);
  hws5.shapeColor = "brown";
  hws6=createSprite(555,570,30,6);
  hws6.shapeColor = "brown";
  
  

  //w5=createSprite(155,270,6,50)
  //w5.shapeColor = "brown";
  //w6=createSprite(110,250,100,10)
  //w6.shapeColor = "brown";
  
  
  vwa1=createSprite(30,585,6,30)
  vwa1.shapeColor = "brown";
  vwa2=createSprite(30,390,6,60);
  vwa2.shapeColor = "brown";
  vwa3=createSprite(30,210,6,60)
  vwa3.shapeColor = "brown";
  vwa4=createSprite(30,60,6,60);
  vwa4.shapeColor = "brown";
  
  vwb1=createSprite(60,555,6,30)
  vwb1.shapeColor = "brown";
  vwb2=createSprite(60,480,6,60);
  vwb2.shapeColor = "brown";
  vwb3=createSprite(60,405,6,30)
  vwb3.shapeColor = "brown";
  vwb4=createSprite(60,345,6,30);
  vwb4.shapeColor = "brown";
  vwb5=createSprite(60,270,6,60)
  vwb5.shapeColor = "brown";
  vwb6=createSprite(60,180,6,60);
  vwb6.shapeColor = "brown";
  vwb7=createSprite(60,105,6,30)
  vwb7.shapeColor = "brown";
  
  vwc1=createSprite(90,465,6,30);
  vwc1.shapeColor = "brown";
  vwc2=createSprite(90,330,6,120);
  vwc2.shapeColor = "brown";
  vwc3=createSprite(90,225,6,30);
  vwc3.shapeColor = "brown";
  vwc4=createSprite(90,165,6,30);
  vwc4.shapeColor = "brown";
  
  vwd1=createSprite(120,585,6,30);
  vwd1.shapeColor = "brown";
  vwd2=createSprite(120,465,6,90);
  vwd2.shapeColor = "brown";
  vwd3=createSprite(120,375,6,30);
  vwd3.shapeColor = "brown";
  vwd4=createSprite(120,315,6,30);
  vwd4.shapeColor = "brown";
  vwd5=createSprite(120,75,6,30);
  vwd5.shapeColor = "brown";
  
  vwe1=createSprite(150,525,6,90);
  vwe1.shapeColor = "brown";
  vwe2=createSprite(150,315,6,90);
  vwe2.shapeColor = "brown";
  vwe3=createSprite(150,180,6,60);
  vwe3.shapeColor = "brown";
  vwe4=createSprite(150,60,6,120);
  vwe4.shapeColor = "brown";
  
  vwf1=createSprite(180,540,6,60);
  vwf1.shapeColor = "brown";
  vwf2=createSprite(180,405,6,30);
  vwf2.shapeColor = "brown";
  vwf3=createSprite(180,300,6,60);
  vwf3.shapeColor = "brown";
  vwf4=createSprite(180,135,6,30);
  vwf4.shapeColor = "brown";
  vwf5=createSprite(180,75,6,30);
  vwf5.shapeColor = "brown";
  
  vwg1=createSprite(210,435,6,30);
  vwg1.shapeColor = "brown";
  vwg2=createSprite(210,300,6,60);
  vwg2.shapeColor = "brown";
  vwg3=createSprite(210,195,6,30)
  vwg3.shapeColor = "brown";
  vwg4=createSprite(210,120,6,60);
  vwg4.shapeColor = "brown";
  vwg5=createSprite(210,15,6,30);
  vwg5.shapeColor = "brown";
  
  vwh1=createSprite(240,585,6,30);
  vwh1.shapeColor = "brown";
  vwh2=createSprite(240,480,6,60);
  vwh2.shapeColor = "brown";
  vwh3=createSprite(240,375,6,30);
  vwh3.shapeColor = "brown";
  vwh4=createSprite(240,255,6,90);
  vwh4.shapeColor = "brown";
  vwh5=createSprite(240,150,6,60);
  vwh5.shapeColor = "brown";
  vwh6=createSprite(240,60,6,60);
  vwh6.shapeColor = "brown";
  
  vwi1=createSprite(270,585,6,30);
  vwi1.shapeColor = "brown";
  vwi2=createSprite(270,450,6,60);
  vwi2.shapeColor = "brown";
  vwi3=createSprite(270,345,6,30);
  vwi3.shapeColor = "brown";
  vwi4=createSprite(270,255,6,30);
  vwi4.shapeColor = "brown";
  vwi5=createSprite(270,180,6,60);
  vwi5.shapeColor = "brown";
  vwi6=createSprite(270,30,6,60);
  vwi6.shapeColor = "brown";
  
  vwj1=createSprite(300,555,6,30);
  vwj1.shapeColor = "brown";
  vwj2=createSprite(300,480,6,60);
  vwj2.shapeColor = "brown";
  vwj3=createSprite(300,285,6,30);
  vwj3.shapeColor = "brown";
  vwj4=createSprite(300,225,6,30);
  vwj4.shapeColor = "brown";
  vwj5=createSprite(300,165,6,30);
  vwj5.shapeColor = "brown";
  
  vwk1=createSprite(330,435,6,150);
  vwk1.shapeColor = "brown";
  vwk2=createSprite(330,255,6,30);
  vwk2.shapeColor = "brown";
  vwk3=createSprite(330,150,6,60)
  vwk3.shapeColor = "brown";
  vwk4=createSprite(330,75,6,30);
  vwk4.shapeColor = "brown";
  vwk5=createSprite(330,15,6,30);
  vwk5.shapeColor = "brown";
  
  vwl1=createSprite(360,540,6,60);
  vwl1.shapeColor = "brown";
  vwl2=createSprite(360,465,6,30);
  vwl2.shapeColor = "brown";
  vwl3=createSprite(360,375,6,90)
  vwl3.shapeColor = "brown";
  vwl4=createSprite(360,60,6,60);
  vwl4.shapeColor = "brown";
  
  vwm1=createSprite(390,570,6,60);
  vwm1.shapeColor = "brown";
  vwm2=createSprite(390,495,6,30);
  vwm2.shapeColor = "brown";
  vwm3=createSprite(390,435,6,30);
  vwm3.shapeColor = "brown";
  vwm4=createSprite(390,375,6,30)
  vwm4.shapeColor = "brown";
  vwm5=createSprite(390,285,6,90);
  vwm5.shapeColor = "brown";
  vwm6=createSprite(390,165,6,30);
  vwm6.shapeColor = "brown";
  vwm7=createSprite(390,75,6,30);
  vwm7.shapeColor = "brown";
  
  vwn1=createSprite(420,540,6,60);
  vwn1.shapeColor = "brown";
  vwn2=createSprite(420,450,6,60)
  vwn2.shapeColor = "brown";
  vwn3=createSprite(420,300,6,120);
  vwn3.shapeColor = "brown";
  vwn4=createSprite(420,135,6,30);
  vwn4.shapeColor = "brown";
  
  vwo1=createSprite(450,555,6,30);
  vwo1.shapeColor = "brown";
  vwo2=createSprite(450,480,6,60);
  vwo2.shapeColor = "brown";
  vwo3=createSprite(450,270,6,120)
  vwo3.shapeColor = "brown";
  vwo4=createSprite(450,120,6,60);
  vwo4.shapeColor = "brown";
  vwo5=createSprite(450,15,6,30);
  vwo5.shapeColor = "brown";
  
  vwp1=createSprite(480,540,6,120);
  vwp1.shapeColor = "brown";
  vwp2=createSprite(480,375,6,30);
  vwp2.shapeColor = "brown";
  vwp3=createSprite(480,315,6,30)
  vwp3.shapeColor = "brown";
  vwp4=createSprite(480,225,6,30);
  vwp4.shapeColor = "brown";
  vwp5=createSprite(480,90,6,180);
  vwp5.shapeColor = "brown";
  
  vwq1=createSprite(510,585,6,30);
  vwq1.shapeColor = "brown";
  vwq2=createSprite(510,495,6,30);
  vwq2.shapeColor = "brown";
  vwq3=createSprite(510,420,6,60)
  vwq3.shapeColor = "brown";
  vwq4=createSprite(510,345,6,30);
  vwq4.shapeColor = "brown";
  vwq5=createSprite(510,285,6,30);
  vwq5.shapeColor = "brown";
  vwq6=createSprite(510,210,6,60);
  vwq6.shapeColor = "brown";
  vwq7=createSprite(510,90,6,60);
  vwq7.shapeColor = "brown";
  
  vwr1=createSprite(540,495,6,90)
  vwr1.shapeColor = "brown";
  vwr2=createSprite(540,375,6,30);
  vwr2.shapeColor = "brown";
  vwr3=createSprite(540,285,6,90);
  vwr3.shapeColor = "brown";
  vwr4=createSprite(540,165,6,30);
  vwr4.shapeColor = "brown";
  vwr5=createSprite(540,90,6,60);
  vwr5.shapeColor = "brown";
  
  vws1=createSprite(570,495,6,150);
  vws1.shapeColor = "brown";
  vws2=createSprite(570,285,6,30);
  vws2.shapeColor = "brown";
  vws3=createSprite(570,210,6,60);
  vws3.shapeColor = "brown";
  vws4=createSprite(570,135,6,30);
  vws4.shapeColor = "brown";
  vws5=createSprite(570,60,6,60);
  vws5.shapeColor = "brown";

  wall=createSprite(600,300,5,600);
  wall.shapeColor = "turquoise";
  
  edges = createEdgeSprites()
  
}

function draw() {
  background("220");
  
  textSize(20);
  fill("green")
  text("Find the way out in 30 seconds", 615,60);
  textSize(30);
  fill("maroon")
  text("Timer: "+timer, 687, 160);
  if(gameState === PLAY){
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  }
  
  if(keyDown("up"))
    {
      ball.y = ball.y -3
    }
  if(keyDown("down"))
    {
      ball.y = ball.y +3
    }
  if(keyDown("left"))
    {
      ball.x = ball.x-3
    }
  if(keyDown("right"))
    {
      ball.x = ball.x +3
    }
  
  ball.collide(hwa1)
  ball.collide(hwa2)
  ball.collide(hwa3)
  ball.collide(hwa4)
  ball.collide(hwa5)
  ball.collide(hwa6)
  ball.collide(hwa7)
  
  ball.collide(hwb1)
  ball.collide(hwb2)
  ball.collide(hwb3)
  ball.collide(hwb4)
  ball.collide(hwb5)
  
  ball.collide(hwc1)
  ball.collide(hwc2)
  ball.collide(hwc3)
  ball.collide(hwc4)
  
  ball.collide(hwd1)
  ball.collide(hwd2)
  ball.collide(hwd3)
  ball.collide(hwd4)
  
  ball.collide(hwe1)
  ball.collide(hwe2)
  ball.collide(hwe3)
  ball.collide(hwe4)
  ball.collide(hwe5)
  ball.collide(hwe6)
  
  ball.collide(hwf1)
  ball.collide(hwf2)
  
  ball.collide(hwg1)
  ball.collide(hwg2)
  ball.collide(hwg3)
  ball.collide(hwg4)
  ball.collide(hwg5)
  
  ball.collide(hwh1)
  ball.collide(hwh2)
  ball.collide(hwh3)
  ball.collide(hwh4)
  ball.collide(hwh5)
  
  ball.collide(hwi1)
  ball.collide(hwi2)
  ball.collide(hwi3)
  ball.collide(hwi4)
  ball.collide(hwi5)
  ball.collide(hwi6)
  
  ball.collide(hwj1)
  ball.collide(hwj2)
  ball.collide(hwj3)
  
  ball.collide(hwk1) 
  ball.collide(hwk2)
  ball.collide(hwk3)
  ball.collide(hwk4)
  ball.collide(hwk5)
  
  ball.collide(hwl1)
  ball.collide(hwl2)  
  ball.collide(hwl3)
  ball.collide(hwl4)
  
  ball.collide(hwm1)
  ball.collide(hwm2)
  ball.collide(hwm3)
  ball.collide(hwm4)  
  ball.collide(hwm5)
  
  ball.collide(hwn1)
  ball.collide(hwn2)
  ball.collide(hwn3)
  ball.collide(hwn4)
  
  ball.collide(hwo1)  
  ball.collide(hwo2)
  ball.collide(hwo3)
  ball.collide(hwo4)
  ball.collide(hwo5)
  
  ball.collide(hwp1)
  ball.collide(hwp2)  
  ball.collide(hwp3)
  ball.collide(hwp4)
  ball.collide(hwp5)
  
  ball.collide(hwq1)
  ball.collide(hwq2)
  ball.collide(hwq3)
  
  ball.collide(hwr1)
  ball.collide(hwr2)
  ball.collide(hwr3)
  ball.collide(hwr4)
  ball.collide(hwr5)
  
  ball.collide(hws1)
  ball.collide(hws2)
  ball.collide(hws3)
  ball.collide(hws4)
  ball.collide(hws5)
  ball.collide(hws6)  
  
  ball.collide(vwa1)
  ball.collide(vwa2)
  ball.collide(vwa3)
  ball.collide(vwa4)
  
  ball.collide(vwb1)
  ball.collide(vwb2)
  ball.collide(vwb3)  
  ball.collide(vwb4)
  ball.collide(vwb5)
  ball.collide(vwb6)
  ball.collide(vwb7)
  
  ball.collide(vwc1)
  ball.collide(vwc2)
  ball.collide(vwc3)
  ball.collide(vwc4)
  
  ball.collide(vwd1)
  ball.collide(vwd2)
  ball.collide(vwd3)
  ball.collide(vwd4)
  ball.collide(vwd5)
  
  ball.collide(vwe1)
  ball.collide(vwe2)
  ball.collide(vwe3)
  ball.collide(vwe4)
  
  ball.collide(vwf1)
  ball.collide(vwf2)
  ball.collide(vwf3)
  ball.collide(vwf4)
  ball.collide(vwf5)
  
  ball.collide(vwg1)
  ball.collide(vwg2)
  ball.collide(vwg3)
  ball.collide(vwg4)
  ball.collide(vwg5)
  
  ball.collide(vwh1)
  ball.collide(vwh2)
  ball.collide(vwh3)
  ball.collide(vwh4)
  ball.collide(vwh5)
  ball.collide(vwh6)
  
  ball.collide(vwi1)
  ball.collide(vwi2)
  ball.collide(vwi3)
  ball.collide(vwi4)
  ball.collide(vwi5)
  ball.collide(vwi6)
  
  ball.collide(vwj1)
  ball.collide(vwj2)
  ball.collide(vwj3)
  ball.collide(vwj4)
  ball.collide(vwj5)
  
  ball.collide(vwk1)
  ball.collide(vwk2)
  ball.collide(vwk3)
  ball.collide(vwk4)
  ball.collide(vwk5)
  
  ball.collide(vwl1)
  ball.collide(vwl2)
  ball.collide(vwl3)
  ball.collide(vwl4)
  
  ball.collide(vwm1)
  ball.collide(vwm2)
  ball.collide(vwm3)
  ball.collide(vwm4)
  ball.collide(vwm5)
  ball.collide(vwm6)
  ball.collide(vwm7)
  
  ball.collide(vwn1)
  ball.collide(vwn2)
  ball.collide(vwn3)
  ball.collide(vwn4)
  
  ball.collide(vwo1)
  ball.collide(vwo2)
  ball.collide(vwo3)
  ball.collide(vwo4)
  ball.collide(vwo5)
  
  ball.collide(vwp1)
  ball.collide(vwp2)
  ball.collide(vwp3)
  ball.collide(vwp4)
  ball.collide(vwp5)
  
  ball.collide(vwq1)
  ball.collide(vwq2)
  ball.collide(vwq3)
  ball.collide(vwq4)
  ball.collide(vwq5)
  ball.collide(vwq6)
  ball.collide(vwq7)
  
  ball.collide(vwr1)
  ball.collide(vwr2)
  ball.collide(vwr3)
  ball.collide(vwr4)
  ball.collide(vwr5)
  
  ball.collide(vws1)
  ball.collide(vws2)
  ball.collide(vws3)
  ball.collide(vws4)
  ball.collide(vws5)
  
  ball.collide(wall)
  
  
  retry.visible = false;
  
  if(ball.isTouching(trophy) && timer >0)
    {
      ball.x = 575;
      ball.y = 585;
      textSize(70)
      fill("green")
      text("YOU", 675,300);
      text("WON!!!", 650,375);
      gameState = WON;
    }
  else if(timer === 0)
    {
      retry.visible = true;
      textSize(70)
      fill("red")
      text("Game", 660,300);
      text("Over!!!", 650,375);
      gameState = OVER;
    }
  
  if(gameState === WON){
      
    textSize(30);
    fill("maroon")
    text("Timer: "+timer, 687, 160);
  } 
  else if(gameState === OVER){
    if(mousePressedOver(retry)){
      reset();
    }
    
  }
  
  ball.collide(edges)

  drawSprites();
  textSize(10);
  text(mouseX+","+mouseY,mouseX,mouseY)
}

function reset(){
  gameState = PLAY;
  ball.x = 15;
  ball.y = 15;
  timer = 30;
}

function next(){
  gameState = PLAY;
  ball.x = 15;
  ball.y = 15;
  trophy.x = 465;
  trophy.y = 285;
  timer = 30;
}