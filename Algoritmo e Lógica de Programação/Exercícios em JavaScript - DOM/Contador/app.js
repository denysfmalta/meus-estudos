let valor = 0;
const num = document.querySelector("#valor");
document.querySelector("#btn_incremento").addEventListener('click', () => {
    num.textContent = ++valor
})
document.querySelector("#btn_decremento").addEventListener('click', () => {
    num.textContent = --valor
})