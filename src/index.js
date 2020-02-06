


class Application {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext("2d");

        this.Ycenter = 65;
        this.Xcenter = 118;
        this.Xled = 237;
        this.Yled = 133;
        this.Bsize = 60;

    }


    run() {
        //rutan 237*133px
        this.canvas.width = window.innerWidth - 20;
        this.canvas.height = window.innerHeight - 20;

        let width = this.canvas.width / 8;
        let height = this.canvas.height / 8;

        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 30; x++) {
                this.ctx.strokeRect(x * width, y * height, 0, 133);
                this.ctx.strokeRect(x * width, y * height, 237, 0);
                this.ctx.strokeStyle = "black";
            }
        }



        this.drawCirkle(4, 3, "black")
        this.drawCirkle(4, 4, "white")
        this.drawCirkle(3, 4, "black")
        this.drawCirkle(3, 3, "white")


        this.canvas.addEventListener('click', this.placeMarker.bind(this));
    }

    placeMarker(event) {
        const mouseX = event.clientX - this.canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - this.canvas.getBoundingClientRect().top;
        const column = Math.floor(mouseX / 237);
        const row = Math.floor(mouseY / 133);
        this.drawCirkle(column, row);
    }

    drawCirkle(xpos, ypos, Bcolor) {
        this.ctx.beginPath();
        this.ctx.arc(this.Xled * xpos + this.Xcenter, this.Yled * ypos + this.Ycenter, this.Bsize, 0, Math.PI * 2, true);
        this.ctx.fillStyle = Bcolor;
        this.ctx.fill();
    }

}

const app = new Application();
app.run();
