import {randomFromRange, randomBoolean, randomValue} from "./utils.js";

export default class Shape{
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.width = randomFromRange(5, 40);
        this.height = randomFromRange(5, 40);

        this.speedX =randomFromRange(-300, 300);
        this.speedY =randomFromRange(-300, 300);

        this.stroke = randomBoolean();
        this.color = randomValue(["blue", "red", "blueviolet"]);


    }

    draw(ctx, dt){
        
        //Studsa om utanför ritytan i x-led
        if((this.x+this.width) >= ctx.canvas.width)
            this.speedX = -Math.abs(this.speedX);

        else if(this.x <= 0)
        this.speedX = Math.abs(this.speedX);

        //Studsa om utanför ritytan i y-led
        if((this.y+this.height) >= ctx.canvas.height)
        this.speedY = -Math.abs(this.speedY);

        else if(this.y <= 0)
        this.speedY = Math.abs(this.speedY);
        

        if(this.stroke){
            ctx.strokeStyle = this.color;
            ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
        else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        this.x += this.speedX * dt;
        this.y += this.speedY * dt;
    }
}