class Blocks {
    constructor(x,y,width,height){
      var options = {
         restitution:0.4,
          friction:1.0,
          density:1.0
      }
      
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      World.add(world,this.body)
      
    }
    display(){
       var blockspos = this.body.position;
       var angle = this.body.angle
       push();
       rectMode(CENTER);
       translate(blockspos.x,blockspos.y)
       rotate(angle)
       fill(398,63,478);
       rect(0,0,this.width,this.height)
       pop()
      
    }
}