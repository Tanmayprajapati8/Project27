class Ball{
    constructor(x,y,w,h){
        var options={
        restitution:0.2,
        friction:1,
        density:1.2,
        isStatic:true
        }
        this.body=Bodies.circle(x,y,20,options);
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,20,20);
        pop();
    }
}