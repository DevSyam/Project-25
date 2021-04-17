class Ball{
    constructor(x,y) {
        var options = {
            isStatic : false,
            restitution: 0.3,
            friction : 0.5,
            density :  1.2,
        }
        this.body = Bodies.circle(x,y,50,options);

        this.image = loadImage("paper.png");

        //this.radius = radius;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        //ellipse(pos.x,pos.y,50);
        image(this.image,pos.x, pos.y, 57, 57);
    }
}