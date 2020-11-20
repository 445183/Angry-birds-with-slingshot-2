class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sling1.png");
        this.sling2=loadImage("sling2.png");
        this.sling3=loadImage("sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(bodyA){
        this.sling.bodyA=bodyA;
    }
    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(66,48,12);
            if(pointA.x<230){
                line(pointA.x-25, pointA.y, pointB.x+40, pointB.y-5);
                line(pointA.x-25, pointA.y, pointB.x-20, pointB.y);
                image(this.sling3,pointA.x-25, pointA.y-10,10,30)
            }else{
                line(pointA.x+25, pointA.y, pointB.x+40, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x-20, pointB.y);
                image(this.sling3,pointA.x+15, pointA.y-10,10,30)
            }
        }
        image(this.sling1,200,20);
        image(this.sling2,170,12.5);
    }
    
}