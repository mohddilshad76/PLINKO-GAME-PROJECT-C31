class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 2,
            friction: 0.4,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("sprites/cloud.2.png");
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        super.display();
        

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};