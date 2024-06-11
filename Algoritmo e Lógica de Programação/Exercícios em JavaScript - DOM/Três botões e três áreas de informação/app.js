let botao_a = document.querySelector('#tab1')
let botao_b = document.querySelector('#tab2')
let botao_c = document.querySelector('#tab3')
let card_a = document.querySelector('#info1')
let card_b = document.querySelector('#info2')
let card_c = document.querySelector('#info3')


document.addEventListener('DOMContentLoaded', () => {
    card_b.className += " .hidden"
})
botao_a.addEventListener('click', () => {
    card_b.remove()
    card_c.remove()
})

botao_b.addEventListener('click', () => {
    card_a.remove()
    card_c.remove()
})

botao_c.addEventListener('click', () => {
    card_a.remove()
    card_b.remove()
})