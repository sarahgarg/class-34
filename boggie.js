class boggie{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.img=loadImage("images/coach.png");
      World.add(myWorld,this.body);
      Matter.Body.setMass(this.body,this.body.mass*5)
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
  