class Ground {
    constructor(x,y,h,w) {
        this.body = Bodies.rectangle(x,y,w,h)
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        World.add(world,this.body);
    }
    display() {
        var pos= this.body.position;
        push();
        rectMode(CENTER);
        stroke(189);
        fill(207);
        rect(pos.x,pos.y,this.w,this.h)
        pop();
      }
  }
