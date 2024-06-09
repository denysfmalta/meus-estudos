/*
OPERADORES DE COMPARAÇÃO
------------------------

A == B Se o valor A é igual ao valor B
A === B Se o valor e o tipo de dado de A é igual ao valor e tipo de dado de B
A != B Se o valor de A não é igual ao de B
A !== B Se o valor ou o tipo de dados de A é diferente do valor e tipo de dados de B
A < B Se A é menor que B
A > B Se A é maior que B
A <= B Se A é menor ou igual a B
A >= B Se A é maior ou igual a B

*/


// Valores e tipos de dados
let valor1 = 10
let valor2 = "10"

if(valor1 == valor2){
    console.log("Os valores são iguais.")
} // true

if(valor1 === valor2){
    console.log("Os valores são iguais.")
} //false

/*
OPERADORES LÓGICOS
--------------------

Condição A && Condição B        Verdadeiro se ambas verdadeiras
Condição A || Condição B        Verdadeiro se uma for verdadeira
!Condição A                     Verdadeiro se a condição A for falsa

*/

// Exemplo 1

let valor3 = 10;
if (valor3 > 5 && valor3 < 15){
    console.log('O valor está entre 5 e 15')
}

// Exemplo 2

let valor4 = 20;
if(valor2 == 20 || valor2 > 100) {
    console.log('O valor é igual a 20 ou superior a 100')
}

// Exemplo 3
let enviar_email = false 
if(!enviar_email){
    console.log('Não enviar email')
}

// Equivale a:

if (enviar_email == false){
    console.log('Não enviar email')
}

// Exemplo 4
if((10 +20 > 30) || (40 + 50 < 100)){
    console.log('Pelo menos uma das condições é verdade')
}

