// FUNCTION EXPRESSIONS

/* function escrever1() {
    console.log("Olá Mundo")
}

let escrever2 = function () {
    console.log("Olá Mundo2")
}

escrever1()
escrever2() */

// ----------------------------
// evocar corretamente a função
// ----------------------------

/* funcao() // nao vai funcionar
let funcao = function () {
    console.log("Texto da função")
}
funcao() */

// -----------------------------
// arrow function - introduzidas com o ES6 - síntaxe mais reduzida
// -----------------------------

/* let funcao1 = function () {
    console.log("funcao 1")
}

let funcao2 = () => {
    console.log("funcao 2")
}

funcao1()
funcao2() */

// -----------------------------
// arrow function com parâmetros
// -----------------------------

/* 
let funcao = (a, b) => {
   return a + b
}

console.log(adicao(100, 200))

// ou

let adicao = (a, b) => a + b 
console.log(adicao(100, 200))

let escrever = mensagem => console.log(mensagem)
escrever("Arrow function!")
escrever("Javascript é fantástico")
 */