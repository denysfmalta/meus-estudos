// OBJETOS

// --------------------------
// definir um objeto
// --------------------------

/* let pessoa = {
    //propriedades
    nome: "Denys",
    sobrenome: "Malta",
    idade: 23,
    genero: "masculino",

    // métodos
    apresentar_nome: function() {
        return this.nome + " " + this.sobrenome
    },

    apresentar_idade: function () {
        return this.idade + " anos de idade"
    },

    hobbies: [
        "Programação",
        "Cinema",
        "Música"
    ]
}
 */

// ------------------------------
// apresentar dados de um objeto
// ------------------------------


/* console.log(pessoa.nome)
console.log(pessoa["genero"])
console.log(pessoa.apresentar_nome())
console.log(pessoa.apresentar_idade())
console.log(pessoa.hobbies)
 */

// -------------------------------
// apresentar todas as propriedades do objeto
// -------------------------------


/* for (let propriedade in pessoa) {
    console.log(pessoa[propriedade])
} */

// --------------------------------
// adiciona propriedades ao objeto
// --------------------------------


/* pessoa.email = "denysfmalta@hotmai.com"
pessoa['mobile'] = "16996363591"
console.log(pessoa.email)
console.log(pessoa.mobile)
console.log(pessoa) */

// --------------------------------
// eliminar propriedades de um objeto
// --------------------------------

/* delete pessoa.idade
console.log(pessoa.idade) */  // indefinido

// ---------------------------------
// MUITO IMPORTANTE: valor vs referência
// Os objetos são tratados como referências na memória.
// Quando copiamos um objeto a partir de outro,
// não estamos criando um novo objeto. 
// Apenas uma nova referência.
// -----------------------------------



/* let transporte = {
    tipo: "automóvel",
    ano: 2032,
    marca: "audi"
}

let novo_transporte = transporte
novo_transporte.marca = "mercedes"

console.table(transporte)
console.table(novo_transporte) */



// -----------------------------
// criar um novo objeto a partir de outro:


/* let transporte_final = Object.assign({}, transporte)
transporte_final.marca = "nissan"
console.table(transporte)
console.table(transporte_final) */


// ------------------------------
// outra forma: spread operator


/* let transporte2 = { ...transporte2 }
transporte2.marca = "tesla"
console.table(transporte)
console.table(transporte2)
*/