class chain {
    constructor(body1, body2,offsetroofX,offsetroofY) {
        this.offsetX=offsetroofX;
        this.offsetY=offsetroofY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.01,
            length: 100,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        push();
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(8);
        line(pointA.x+this.offsetX, pointA.y+this.offsetY, pointB.x, pointB.y);
        pop();
    }

}