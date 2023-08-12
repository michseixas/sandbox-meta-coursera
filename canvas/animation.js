let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position= 0;
let moveSpeed = speed;
let radius = 40;

function moveBall(){ //responsible for moving the ball across the screen and changing its direction once it reaches the left or right side of the screen. 
    if(position + radius >640) {
        moveSpeed = -speed;
    } else if (position - radius < 0) {
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall(){
    context.clearRect(0, 0, 640, 480); //clears the canvas area using context dot clear wreck

    context.fillStyle = "#62687f"; //it then draws the ball in its current position using the context.beginPath, context.arc and context.fill functions. 
    context.beginPath();
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();

}

function animate(){ //calls move and draw functions and calls window.requestanimationframe to schedule the animate function to be called again
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate); //call window.requestanimationframe to start the animate function being called.