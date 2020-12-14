
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar, bob1, bob2, bob3, bob4, bob5, wire1, wire2, wire3, wire4, wire5, box1, box2, box3, box4, box5;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// box1 = new Ground(300, 200, 5, 5);
	// box2 = new Ground(340, 200, 5, 5);
	bar = new Ground(380, 200, 400, 40);
	bob1 = new Ball(300, 500, 20, 20);
	bob2 = new Ball(340, 500, 20, 20);
	// box3 = new Ground(380, 200, 2, 2);
	bob3 = new Ball(380, 500, 20, 20);
	bob4 = new Ball(420, 500, 20, 20);
	// box4 = new Ground(420, 200, 5, 5);
	bob5 = new Ball(460, 500, 20, 20);
	// box5 = new Ground(460, 200, 2, 2);

	wire1 = new chain(bar.body, bob1.body, -80, 0);
	wire2 = new chain(bar.body, bob2.body, -40, 0);
	wire3 = new chain(bar.body, bob3.body, 0, 0);
	wire4 = new chain(bar.body, bob4.body, 40, 0);
	wire5 = new chain(bar.body, bob5.body, 80, 0);





	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("white");
	bar.display();

	wire2.display();
	wire5.display();
	wire4.display();
	// // box5.display();
	bob5.display();
	bob4.display();
	// box4.display();
	wire3.display();
	bob3.display();

	wire1.display();
	bob1.display();
	bob2.display();
	// box1.display();
	// box2.display();
	//   keyPressed();

	drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob5.body, bob5.body.position, { x: 50, y: -50 });
	}
}


