// Theme sombre et claire du bouton
const keys = document.querySelectorAll('.key');
document.querySelector('.theme').addEventListener('click', function () {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    const display = document.querySelector('.display');

    body.classList.toggle('light-mode');
    calculator.classList.toggle('light-mode');
    display.classList.toggle('light-mode');
    keys.forEach(key => key.classList.toggle('light-mode'));

    
    if (body.classList.contains('light-mode')) {
        this.textContent = 'Mode sombre';
    } else {
        this.textContent = 'Mode clair';
    }
});


// Gestion des inputs du clavier
let entree = document.querySelector('.input');
input = "" // l'entree est initialise a vide
keys.forEach(key => {
    const value = key.dataset.key;
    key.addEventListener('click', function() {
        if (value == 'brackets') {
            
        if (input.split('(').length <= input.split(')').length) {
            input += '(';
        } else {
            input += ')';
        }
        } else {
            input += value;
        }
        entree.value = input;
    });
});
