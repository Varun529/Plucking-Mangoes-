class Tb{
    constructor(x,y,){
        var options={
            friction:0.5,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 10, 5, options);
        this.width = 10;
        this.height = 5;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, this.width, this.height);
      }
}