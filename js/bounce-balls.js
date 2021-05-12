// center the canvas
var style = canvas.style;
style.marginLeft = "auto";
style.marginRight = "auto";
style.marginTop = "20px";
var parentStyle = canvas.parentElement.style;
parentStyle.textAlign = "center";
parentStyle.width = "100%";


var balls =[];

for(let i =0;i<BALLCOUNT; i++){
    balls[i] = new Ball(SPEED, BALLRADIUS);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(function(ball){ball.draw();});
    balls.forEach(function(ball,index){ball.update(index);});
}

setInterval(draw, REFRESH_TIME);
