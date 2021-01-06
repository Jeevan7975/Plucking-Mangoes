class launcher{
constructor(body, anchor){
    var option={
        bodyA: body,
        pointB: anchor,
        stiffness: 0.004,
        length: 1
    }
    
    this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(option)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}

