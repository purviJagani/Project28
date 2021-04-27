class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            legnth: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        world.add(world. this.launcher);
    }
    fly(){
        this.launcher.pointA = null;
    }
    display(){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeweight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}