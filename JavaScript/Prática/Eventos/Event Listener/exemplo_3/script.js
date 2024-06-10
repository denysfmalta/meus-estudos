/*
OBJETIVO:
Ao clicar no botão, alterar a cor de funda da caixa para aquamarine e
apresentar o texto 'clique' na consola e ainda remover o evento click do botão
*/

let caixa = document.querySelector(".caixa")
let botao = document.querySelector("button")

function executar(event) {
    caixa.classList.add('cor-fundo-caixa')
    console.log('clique')
    botao.removeEventListener('click', executar)
}

botao.addEventListener('click', executar)
