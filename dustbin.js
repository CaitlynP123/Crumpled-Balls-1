class Dustbin{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }

        this.wall = Bodies.rectangle(x,y,width,height,option)
        World.add(world, this.wall)
        this.h = height
        this.w = width
    }

    display() {
        var pos = this.wall.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("white")
        stroke("white")
        rect(0,0,this.w,this.h)
        pop()
    }
}
