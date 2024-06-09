// MANIPULAR CSS ATRAVÉS DE className e classList

let container = document.querySelector('section')

// ver o valor de class na consola
// console.log(container.className)

// alterar o valor de class
/*  container.className = "container container-light"
console.log(container.className)
 */
// // adicionar mais uma classe
// container.className += " container-light"

// Ver as classes de um elemento

// console.log(container.classList)

// Adicionar multiplas classes

// container.classList.add('outra-classe1', 'outra-classe2')


// // -----------------------------
// REMOVER

// container.classList.remove('class-a')
// ou multiplas classes
// container.classList.remove('classe-a', 'classe-b')

// ---------------------------------
// ALTERNAR CLASSES
// ---------------------------------
// container.classList.toggle('container')
// container.classList.toggle('container-light')

// ----------------------------------
// verificar se uma classe existe no elemento
 

/* if (container.classList.contains('container')) {
     console.log('A classe container existe.')
} else {
        console.log('A classe container não existe.')
}   */