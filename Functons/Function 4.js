// Function 4 // 

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

const shortNames = names.filter(name => name.length < 5);
para.textContent = shortNames;

section.innerHTML = ' ';

section.appendChild(para);