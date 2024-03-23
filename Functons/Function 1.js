// Function 1 //

function chooseName() 
{
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    para.textContent = "Random Name: " + randomName;
}

chooseName();