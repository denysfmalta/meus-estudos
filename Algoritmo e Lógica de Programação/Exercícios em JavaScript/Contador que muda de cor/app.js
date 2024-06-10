/* A partir do HTML existente, apresentar um valor inicial igual a 0 e definir funcionalidades nos 
botões de decremento e incremento. 
 No caso do valor ser zero o texto deve ser branco. 
 No caso do valor ser negativo o texto deve ser vermelho puro. 
 No caso do valor ser positivo o texto deve ser verde puro. */

let valor = 0;
const num = document.querySelector("#valor");
let cor_texto = document.querySelector('h1')

 document.querySelector("#btn_incremento").addEventListener('click', () => {
     num.textContent = ++valor
    if(valor > 0){
    num.classList.remove('valores-negativos') 
    num.className += " valores-positivos"
         
    } else if(valor === 0){
        num.classList.remove('valores-positivos')
        num.classList.remove('valores-negativos')
       }
     
 })
 document.querySelector("#btn_decremento").addEventListener('click', () => {
     num.textContent = --valor
     if(valor < 0){
        num.classList.remove('valores-positivos')
        num.className += " valores-negativos"
       } else if(valor === 0){
        num.classList.remove('valores-positivos')
        num.classList.remove('valores-negativos')
       }
 }) 