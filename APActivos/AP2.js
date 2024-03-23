// Aprendizaje Activo 2 //

var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() 
{
  var choice = select.value;

  switch (choice) 
  {
    case 'blanco':
      update('white', 'black');
      break;
    case 'negro':
      update('black', 'white');
      break;
    case 'morado':
      update('purple', 'white');
      break;
    case 'amarillo':
      update('yellow', 'black');
      break;
    case 'psicodélico':
      update('magenta', 'lime');
      break;
    default:
      update('white', 'black');
  }
}

function update(bgColor, textColor) 
{
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}