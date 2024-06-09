// APLICAR ESTILOS INLINE COM JAVASCRIPT


/* let el = document.querySelector("h1").style.color = "red"
el.style.color = "rgb(255,0,0)" */

let el = document.querySelector("p")
// console.log(el.style.backgroundColor)
const estilos = window.getComputedStyle(el)
console.log(estilos.getPropertyValue('color'))
console.log(estilos.getPropertyValue('font-size'))
