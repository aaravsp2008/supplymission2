//variables
 var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
 var packageBody,ground
 var boxmid,boxside1,boxside2

//const
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

//preload
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

//setup
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255,20,7);
	
	boxmid = createSprite(width/2,650,200,20);
	boxside1 = createSprite(200,650,20,200);
	boxside2 = createSprite(600,650,20,200);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	//colide to the ground
      //packageSprite.collide(ground)

	Engine.run(engine);
  
}

//draw
function draw() {
  rectMode(CENTER);
  background(255,30,12);
  packageSprite.velocityY = packageSprite.y - packageBody.position.y  ;
 // packageSprite.x= packageBody.position.x 
  packageSprite.x= boxmid.position.x; 
   packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

//keypressed
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
	   
	 }
}

//function keyPressed() {
	//if (keyCode === SPACE_KEY) {
	   
	 //}
//}



