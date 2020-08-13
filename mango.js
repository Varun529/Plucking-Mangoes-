class Mango{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1
        }
        
        this.body= Bodies.circle(x,y,10,options);
        //this.width=25;
        //this.height=25;
        this.image=loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
        
    }
    display(){
       
       var pos =this.body.position; 
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,50,50);
       fill("yellow");
        //rect(pos.x, pos.y, this.width, this.height);
        circle(pos.x,pos.y,2)
        push();
        translate(this.body.position.x, this.body.position.y);
        
        pop();
        
    }
}