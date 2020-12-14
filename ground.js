class Ground {
    constructor(x, y, boxwidth, boxheight) {
        var options = {
            // 'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, boxwidth, boxheight, {isStatic:true});
        this.width = boxwidth;
        this.height = boxheight;
        // this.image=loadImage("dustbingreen.png");
        World.add(world, this.body);
    }
    display() {
        push();

        var pos = this.body.position;
        // translate(pos.x,pos.y);
        // rotate(this.body.angle);
        rectMode(CENTER);
        // fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
        // image(this.image,0,0);
        pop();
    }
}