let h1 = document.querySelector('header h1 a');
let voltarInicio = document.querySelector('.iframe a');
let months = document.querySelectorAll('.months a');

for (let i = 0; i < months.length; i++) {
    months[i].addEventListener('click', () => {
        voltarInicio.style.display = 'flex';
    });
}

voltarInicio.addEventListener('click', () => {
    voltarInicio.style.display = 'none';
});

h1.addEventListener('click', () => {
    voltarInicio.style.display = 'none';
});