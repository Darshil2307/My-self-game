var Rocky,Adheera;
var ground,obstacle;
var Rockyimg,Adheeraimg;
var backgroundImg,Obstacleimg;


function preload()
{
  backgroundImg = loadImage("images/KGF Background.jpg");
  Rockyimg = loadImage("images/Yash running.jpg");// Mam this is the only Yash running image I could find from the whole web :(
  Obstacleimg = loadImage("images/obstacle.jpg");  
}
function setup() 
{
  createCanvas(1500,750);

  Rocky = createSprite(400, 550, 50, 50);
  Rocky.addImage(Rockyimg);
  Rocky.scale = 0.65;

  ground = createSprite(750,730,1500,30);
  
  obstacle = createSprite(1000,620,25,25);
  obstacle.addImage(Obstacleimg);
  obstacle.scale = 0.30;
}

function draw() 
{
  background(backgroundImg);  

  Rocky.display();
  ground.display();
  obstacle.display();

  drawSprites();
}

//variables - CHECK :)
  
//preload function to load the images - download and remove bg (We can look at  it tomorrow also);
//Search the web

// setup - create sprites - hero, obstacles, villain, grounds, think of scoring

// draw function