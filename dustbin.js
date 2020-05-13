class Dustbin{
    constructor(){
        this.bin1=Bodies.rectangle(1100,580,200,20,{isStatic:true})
        this.bin2=Bodies.rectangle(1010,520,20,100,{isStatic:true})
        this.bin3=Bodies.rectangle(1190,520,20,100,{isStatic:true})
        World.add(world,this.bin1)
        World.add(world,this.bin2)
        World.add(world,this.bin3)
    }
    display(){
        rectMode(CENTER);
        noStroke();
        fill("red");
        rect(this.bin1.position.x,this.bin1.position.y,200,20)
        rect(this.bin2.position.x,this.bin2.position.y,20,100)
        rect(this.bin3.position.x,this.bin3.position.y,20,100)

    }
}