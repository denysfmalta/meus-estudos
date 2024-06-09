# JavaScript
## O que é o JavaScript?
JavaScript é, atualmente, a mais popular linguagem de programação de scripts para execução do lado do cliente.  
Foi criada para adicionar interatividade e dinamismo ao HTML.
JavaScript = ECMA Script (atualmente ES6).

## O que podemos fazer com o JavaScript?
- Alterar o conteúdo dos elementos HTML
- Modificar conteúdo de uma página web
- Alterar os estilos e posicionamento dos elementos na página
- Reagir a determinados eventos, como um clique num botão
- Executar transições e animações
- Validar a submissão de formulários
- E muito mais...

## Como adicionar JavaScript ao HTML?
### Existem três formas distintas de importar o script ao HTML:
- Dentro de uma tag `<script>`de HTML
- Importação de um arquivo externo "app.js" para o HTML
- Menos comum: adicionar código diretamente nos atributos.
Vamos aos exemplos:
### Código JavaScript dentro do HTML:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        console.log("JavaScript")
    </script>
</head>
<body>
    
</body>
</html>
```
## A síntaxe do JavaScript
Em linguagem de programação, a síntaxe de uma linguagem é um conjunto de regras que devemos aplicar ao escrever o código para que o compilador (ou interpretado, em linguagens como Python) compreenda as intruções corretamente e as execute.
```
console.log("Instrução 1")
console.log("Instrução 2")
```
O código acima apresenta duas instruções distintas e o browser as compila por ordem vertical.  
É importante saber também que o JavaScript é case sensitive, ou seja, interpreta de maneira diferente um código a depender de como as letras são capitalizadas:
```
let nome = "João"
let NOME = "João"
```
## Comentários em JavaScript
Os comentários são muito importantes na programação para demarcar seções diferentes do código, adicionar contexto a funções ou descrever o que determinado trecho de código faz, por exemplo.  
No JavaScript os comentários de uma linha são feitos com duas barras ("//") seguido de um texto.
```
// Comentário de JS
console.log(1)
console.log(2)
console.log(3)
```
Comentários de múltiplas linhas são feitos utilizando "/*":
```
/* Este comentário tem
duas linhas */
```

É comum que se use comentários para inviabilizar a execução de um código, de forma a testar o script sem a funcionalidade de determinado trecho para testes.

## Variáveis
As variáveis são fundamentais em qualquer linguagem de programação. São usadas para guardar uma informação, como por exemplo, texto, valores numéricos ou até mesmo funções inteiras.  
```
var nome = "João Ribeiro"
var idade = 21
var adminstrador = false
```
Existem outros tipos de variáveis no JavaScript além de var, mas se atendo ao caso, é utilizado a expressão "var" para definir uma variável, em seguida é atribuído um valor para essa variável que pode possuir vários tipos, no exemplo acima, são valores, respectivamente: string, number e boolean.

## Let e const
No ECMAScript 6, passou a ser possível definir variáveis com outros dois tipos de declarações: let e const.  
As expressões do tipo "const" **não** podem mudar de valor após terem sido declaras.
```
// let e const
let texto = "frase de um texto"
const pi = 3.14
texto = "nada"
pi = 25 // erro
```

### Diferenciando let e var
As variáveis do tipo var possuem um escopo de função, enquanto let e const tem o escopo de bloco de código.   
Significa dizer que se você declarar uma var fora de uma função e depois tentar chamar ela para dentro de uma função, o código não irá funcionar corretamente:
```
function returnCar() {

    let car = 'Land Rover';

    if (car === 'Land Rover') {

        let car = 'Ferrari';

        console.log('Dentro do if: ' + car);

    }

    console.log('Fora do if: ' + car);

}
```
Realizando a chamada dessa função, veremos isto no console do browser:
> Dentro do if: Ferrari <br>
> Fora do if: Land Rover

## Regras para definição de variáveis
- Os nomes devem começar sempre por uma letra, um underscore ou um dollar sign
- Os nomes nunca podem começar por um número
- Os nomes só podem conter letras maiúscula, minúsculas, o underscore e algarismos;
- O nome de uma variável nunca pode conter espaços
- O nome não pode ser igual a uma palavra reservada do JavaScript

## Apresentando resultados no browser
Antes de entrar na prática de alterar o DOM com JavaScript, existem outras formas de apresentar o código JS no Browser, sendo o principal deles o uso do método `console.log()`.
```
var nome = "João Ribeiro"
console.log(nome)
alert(nome)
document.write(nome)
```

## Tipos de dados
- **String:** valores de textos, podendo ser uma letra, uma palavra ou um texto mais extenso.

- **Number:** valores numéricos, seja um número inteiro, decimal, anotações exponenciais, etc.

- **Infinity:** valor infinito, por exemplo, divisão de um número inteiro por 0.

- **NaN:** not a number, por exemplo, divisão de 0 por 0.

- **Boolean**: valor verdadeiro ou falso.

- **Undefined:**: ocorre quando declaramos uma variável e não atribuímos a ela um valor.

- **Null:** valor vazio, costumeiramente resultado de um erro.

- **Object:** variável capaz de armazenar uma grande quantidade de dados diferentes, como por exemplo, todas as características de um carro.

- **Array:** coleção de vários dados.

- **Function**: 

## Tipagem
No JavaScript, assim como em outras linguagens de programação, as variáveis não são explicitamente tipificados, tendo seus tipos de dados determinado implicitamente pelo valor que os passamos. Isso pode gerar problemas, já que no JavaScript as variáveis também podem mudar o valor de sua atribuição durante o código.   
Uma das formas de manter a noção do tipo de suas variáveis é usando o operador `typeof`:

```
console.log(typeof(<variável>))
```
## DOM - Document Object Model

### O que é o DOM?

É a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na web.  
No DOM, todas as partes do documento, tais como elementos, atributos, texto, etc. são organizados numa estrutura hierárquica em foram de árvore, semelhante a uma árvore genealógica.  
Na terminologia do DOM, estas partes individuais do documento são conhecidas como nós (nodes).  
Com o DOM HTML é possível utilizar JavaScript para construir elementos de HTML, documentos completos, navegar na sua estrutura hierárquica e adicionar, modificar ou apagar elementos e atributos ou o seu conteúdo, entre outras funcionalidades.

