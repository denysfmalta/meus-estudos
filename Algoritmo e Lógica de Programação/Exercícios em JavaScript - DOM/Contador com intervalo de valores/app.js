/* A partir do HTML existente, apresentar um valor inicial igual a 0 e definir funcionalidades
nos botões de decremento e incremento. O valor nunca poderá ser inferior a -10 ou superior a 10. */
let valor = 0;
let num = document.querySelector('#valor')
const btn_incremento = document.querySelector('#btn_incremento')
const btn_decremento = document.querySelector('#btn_decremento')

btn_incremento.addEventListener('click', () => {
   if(valor < 10){
    num.textContent = ++valor
   } 
})

btn_decremento.addEventListener('click', () => {
    if(valor > -10){
        num.textContent = --valor
    }
})