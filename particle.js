class Particles {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.4
         
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
    this.color = color(random(0,225),random(0,225),random(0,225));

      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
  
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate (angle);

      noStroke();
      fill(this.color)
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
  
    }
  };