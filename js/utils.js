function Ball(speed, ballRadius){
    this.x= randomNumber(0+ballRadius/2, WIDTH-ballRadius/2);
    this.y= randomNumber(0+ballRadius/2, HEIGHT-ballRadius/2);
    this.slope = randomNumber(-1,1);
    this.direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];

    this.dx= speed*this.direction;
    this.dy= -1*this.slope*this.dx;

    this.ballRadius= ballRadius;
    this.color= "#0095DD";

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    this.update =(myIndex)=>{

        balls.forEach(function(ball, index){
            if(index!=myIndex){
                distX=ball.x- this.x; 
                distY=ball.y- this.y;
                distance =  Math.sqrt(distX * distX + distY * distY);

                if (distance<this.ballRadius+ball.ballRadius){    
                    
                    this.dx=-this.dx;
                    this.dy=-this.dy;

                    this.x-=distX/2+this.dx;
                    this.y-=distY/2+ this.dy; 

                    if(this.x<this.ballRadius)this.x=ballRadius;
                    if(this.x>WIDTH-this.ballRadius) this.x= WIDTH-this.ballRadius;
                    if(this.y<this.ballRadius)this.y=ballRadius;
                    if(this.y>HEIGHT-this.ballRadius) this.y= HEIGHT-this.ballRadius;           

                }




            
            }
        }.bind(this)
        );



        //bounce from walls
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
