class Dustbin_2{
    constructor(x,y){
        
        this.bottomBody=Bodies.rectangle(x-50,y+50, 200, 20, {isStatic:true});
      
        this.wallthickness= 200;
        this.dustbinHight=20;
        this.DustbinWidth=200;
        this.image = loadImage("images/dustbingreen.png");
        World.add(world, this.bottomBody);

    }
    display(){
        var posBottom=this.bottomBody.position;

        push();
        imageMode(CENTER);
        fill(280); 
        image(this.image,posBottom.x,posBottom.y-100,220,200);
        pop();
    }
}