// Function 2 //

function drawRectangle(x, y, width, height, color) 
{

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

drawRectangle(x, y, width, height, color);