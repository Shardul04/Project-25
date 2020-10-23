class Dustbin_1{
    constructor(x,y){
      
      this.leftWallBody=Bodies.rectangle(x-140,y-20, 20, 200, {isStatic:true});
      this.rightWallBody=Bodies.rectangle(x+40, y-20, 20, 200, {isStatic:true});
      this.wallthickness= 20;
      this.dustbinHight=120;
      this.DustbinWidth=200;
      World.add(world, this.leftWallBody);
      World.add(world, this.rightWallBody);
    }
    display(){
      var posLeft=this.leftWallBody.position;
      var posRight=this.rightWallBody.position;



      push();
      translate(posLeft.x, posLeft.y);
      rectMode(CENTER);
      fill(255);
      rect(0,0,this.wallthickness, this.dustbinHight);
      pop();

      push();
      translate(posRight.x, posRight.y);
      rectMode(CENTER);
      fill(255);
      rect(0,0,this.wallthickness, this.dustbinHight);
      pop();

     


    }
    
}