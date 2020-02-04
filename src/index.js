

class Application
{
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext("2d");
    }

    run(){
        this.canvas.width = window.innerWidth-20;
        this.canvas.height = window.innerHeight-20;

        let width = this.canvas.width/8;
        let height = this.canvas.height/8;

        for(let y = 0; y < 10; y++){
            for(let x = 0; x < 30; x++){
                this.ctx.strokeRect(x*width, y*height, 0,200);
                this.ctx.strokeRect(x*width, y*height, 300,0);
                this.ctx.strokeStyle = "black";
            }
        }

    }
}

const app = new Application();
app.run();



