class Iron{
    
    constructor(x,y,width,height)
    {
    
    var options={
        'restition':0.8,
        'friction':3,
        'density':30,	
    }

        this.body=Bodies.rectangle(x, y, width,height, options)
        this.width = width
        this.height = height
        World.add(world, this.body);

    }
    display()
    {
            var rubberpos=this.body.position;		
            push()
            translate(rubberpos.x, rubberpos.y);
            rectMode(CENTER)
            strokeWeight(4);
            stroke("black");
            fill("black");
        
            rect(0,0,this.width,this.height)

            pop()
    }

}
