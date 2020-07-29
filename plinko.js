class Plinkos {
  constructor(x, y,radius) {
    var options = {
             isStatic : true
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;

    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;

    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate (angle);

    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();

  }
};