class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restition:0.3,
		friction:5,
		density:1,	
	}
        this.r=r
		this.body=Bodies.circle(x,y, (this.r-20)/2, options)
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
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r)

			pop()
	}

}