import { Controlls } from "./controlls.js";

class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        
        this.controlls = new Controlls()
    }
    update(){
        if(this.controlls.left){
            this.x -= 5;
        }
        if(this.controlls.right){
            this.x += 5;
        }
    }
    draw(context) {
        context.beginPath();
        context.rect(
            this.x, this.y, this.width, this.height
            )
            context.fillStyle = this.color;
            context.fill();
        };
}

export {
    Player
};