/* // ARRAYS

let nome1 = "Denys"
let nome2 = "João"
let nome3 = "Ricardo"

let nomes = ["Denys", "João", "Ricardo"]

console.log(nome1)

// Apresentar dados de um array
console.log(nomes)
console.log(nomes[1])

// Alterar dados de um array
nomes[1] =  "Maria"
console.table(nomes)

// Quantos elementos tem um array
console.log(nomes.length)

// Adicionar mais elementos no final do array
nomes.push("Joaquim")

// Adicionar elementos no início do array
nomes.unshift("José")
console.table(nomes)


// Remover elemento do início
nomes.shift("José")
console.table(nomes)

// Remover elemento do fim
nomes.pop()
console.table(nomes)

// Remover elementos permite guardar o valor removido numa variável
let removido = nomes.pop()
console.log(removido)

// Remover e/ou adicionar elementos em qualquer posição dentro do array
console.table(nomes)
nomes.splice(1,2,"joaquim", "manuel", "rui")
console.table(nomes)

// Ver eliminados
console.table(nomes)
let eliminados = nomes.splice(1,0,"Joaquim", "Manuel", "Rui")
console.table(nomes)
console.table(eliminados)

// Extrar partes de um array (retorna um novo array)

console.table(nomes)
let nomes_extraidos = nomes.slice(0,2)
console.table(nomes_extraidos)

// Juntar dois arrays
console.table(nomes)
let outros_nomes = ["joaquim", "carla", "manuel"]
nomes = nomes.concat(outros_nomes)
console.table(nomes)

// Procurar item num array
console.log(nomes.includes("carlos"))

// Procurar posição de item num array
console.table(nomes)
console.log(nomes.indexOf("ana"))

// Converter um array numa sting
let todos_os_nomes = nomes.join("|")
console.log(todos_os_nomes)

// Ordenar um array de forma ascedente
nomes.sort()
console.table(nomes)

// Ordenar um aray de forma descendente
console.table(nomes.sort().reverse()) */