// Theme sombre et claire du bouton
const keys = document.querySelectorAll('.key');
document.querySelector('.btn-theme').addEventListener('click', function () {
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



let entree = document.querySelector('.input');
let sortie = document.querySelector('.output'); 
let input = ""; 

keys.forEach(key => {
    const value = key.dataset.key;
    key.addEventListener('click', function() {
        if (value == 'clear') {
            input = "";
            sortie.value = "0";
        } else if (value == 'backspace') {
            input = input.slice(0, -1); 
        } else if (value == 'brackets') {
            if (input.split('(').length <= input.split(')').length) {
                input += '(';
            } else {
                input += ')';
            }
        } else if (value == '=') {
            try {
                
                const result = eval(input);
                sortie.value = result; 
            } catch (e) {
                sortie.value = "Erreur"; 
            }
        } else {
            input += value; 
        }
        entree.value = input; 
    });
});

