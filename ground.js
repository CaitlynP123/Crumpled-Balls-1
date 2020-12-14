class Ground {
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }

        this.ground = Bodies.rectangle(x,y,width,height,option)
        World.add(world, this.ground)
        this.w = width
        this.h = height
    }

    display(){
        var pos = this.ground.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("yellow")
        rect(0,0,this.w,this.h)
        pop()
    }
}