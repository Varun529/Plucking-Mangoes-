class Stone{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density:1.2
        }
        
        this.body= Bodies.circle(x,y,10,options);
        //this.width=25;
        //this.height=25;
        this.radius=10;
        this.image=loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
        
    }
    display(){
       
       var pos =this.body.position; 
       
        //rect(pos.x, pos.y, this.width, this.height);
        
        push();

        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        fill("gray");
        pop();
        
    }
}