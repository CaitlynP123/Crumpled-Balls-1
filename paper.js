class Paper{
    constructor(x,y){
        var option = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.paper = Matter.Bodies.circle(x,y,20,option)
        World.add(world, this.paper)
            }
    display(){
        
        fill("pink")
        ellipseMode(RADIUS)
        ellipse(this.paper.position.x,this.paper.position.y,20,20)
       }
}