// Events 3 //

buttonBar.addEventListener('click', function(event) 
{
    if (event.target.tagName === 'BUTTON') 
    {
        const color = event.target.getAttribute('data-color');
        buttonBar.style.backgroundColor = color;
    }
});