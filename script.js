document.querySelector('.theme').addEventListener('click', function () {
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    const display = document.querySelector('.display');
    const keys = document.querySelectorAll('.key');

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
