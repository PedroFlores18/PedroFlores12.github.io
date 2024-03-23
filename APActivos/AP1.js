// Aprendizaje Activo 1 //

select.onchange = function() 
{
    var choice = select.value;
    var days;

    switch (choice) {
      case 'January':
      case 'March':
      case 'May':
      case 'July':
      case 'August':
      case 'October':
      case 'December':
        days = 31;
        break;
      case 'April':
      case 'June':
      case 'September':
      case 'November':
        days = 30;
        break;
      case 'February':
        days = 28;
        break;
      default:
        days = 30;
    }
  
    createCalendar(days, choice);
  }