class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.img=loadImage("images/rock1.png");
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        imageMode(CENTER);
        fill("brown");
        image(this.img,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  