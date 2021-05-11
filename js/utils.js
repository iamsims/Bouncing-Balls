function Ball(speed, ballRadius){
    this.x= randomNumber(0+ballRadius/2, WIDTH-ballRadius/2);
    this.y= randomNumber(0+ballRadius/2, HEIGHT-ballRadius/2);
    this.slope = randomNumber(-1,1);
    this.direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];
    this.dx= speed*this.direction;
    this.dy= -1*this.slope*this.dx;
    this.ballRadius= ballRadius;


    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    this.update =()=>{



        if(this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
            this.dx = -this.dx;
        }

        if(this.y + this.dy > canvas.height-this.ballRadius || this.y + this.dy < this.ballRadius) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
    
};

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
};
