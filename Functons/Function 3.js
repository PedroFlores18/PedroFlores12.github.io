// Function 3 //

function random(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseName(namesArray) 
{
    const randomIndex = random(0, namesArray.length - 1);
    return namesArray[randomIndex];
}

para.textContent = "Random Name: " + chooseName(names);

section.innerHTML = ' ';

section.appendChild(para);