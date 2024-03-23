// Events 2 //

document.addEventListener('keydown', function(event) 
{
    const speed = 5;
    switch (event.key) 
    {
        case 'a':
            x -= speed;
            break;
        case 'd':
            x += speed;
            break;
        case 'w':
            y -= speed;
            break;
        case 's':
            y += speed;
            break;
    }
    drawCircle(x, y, size);
});