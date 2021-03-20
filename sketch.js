var policecar;
var powerup1;
var powerup2;
var shield;
var health;
var healthbar;
var shieldbar;
var player;
var obstacle;
var playercar;
var coin;
var bouncer;
var backgroundImage;
var spike1;
var spike2;
var spike3;
var spike4;
var coin1;
var coin2;





function preload ()
{
  policecar = loadImage("images/pc1.png");
  coin = loadImage("images/coin.png");
  powerup1 = loadImage("images/Jetpack.png");
  powerup2 = loadImage("images/speed powerup.png");
  shield = loadImage("images/shield.jpg");
  health = loadImage("images/health.jpg");
  player = loadImage("images/player.png");
  playercar = loadImage("images/playercar.jpg");
  obstacle = loadImage("images/obstacle1.png");
  healthbar = loadImage("images/healthbar.png");
  backgroundImage = loadImage("images/background.png"); 
  spike1 = loadImage("images/spikeA.png");
  spike2 = loadImage("images/spikeB.png");
  spike3 = loadImage("images/spikeC.png");
  spike4 = loadImage("images/spikeD.png");
 
}
  function setup()
  {
     createCanvas(1600, 800);
     
     policecar = createSprite(500, 400, 200, 100);
     powerup1 = createSprite(700, 400, 50, 50);
     playercar = createSprite(900, 400, 200, 100);

     
  }
  function draw()
  {
    background("backgroundImage");
    


    drawSprites()

  }
  function spawnCoins()
  {
  if(framecount %70===0)
  {
    coin = createSprite(300, 400, 50, 50);    
    
  }    
  }
