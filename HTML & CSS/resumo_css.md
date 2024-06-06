# CSS3
## Cascading Style Sheets
Também, como HTML5 e Markdown, não se trata de uma linguagem de programação. 

Mas neste caso, também não estamos falando de uma linguagem de marcação, e sim de uma linguagem de definição de estilos (stylesheet language).

### Objetivos do CSS:
- Organização de layouts de HTML.
- Definição de estilos dos elementos.
- Visualização das páginas em diferentes dispostivos.

## Inline style
Uma das formas mais simples de aplicar estilos de CSS a uma página web é adicionando a estilização dentro do próprio documento HTML, através do atributo "style" em uma tag.

```
<h1 style="color: red; font-size: 30px;">Título do seu documento</h1>
```
O elemento `<h1>` acima, que define um título, recebe o atributo "style" que possui dois valores: cor (vermelha) e tamanho da fonte (30px).

## Estilização através de classes
Podemos também criar uma folha de estilos dentro do documento HTML. 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<style>
	.titulo{
		color: red;
		font-size: 30px;
	}
	.texto{
		color: grey;
		font-size: 16px;
	}
	</style>
</head>
<body>
    <h1 class="titulo">Título do seu documento</h1>
	<p class="texto">Texto do seu documento</p>
</body>
</html>
```
Essa abordagem define a folha de estilos dentro da tag `<style>`, que fica aninhada dentro da tag `<head>`. 

Também é explorado aqui a prática de definir ***classes*** para os elementos, estas classes irão sempre seguir o estilo definido para cada uma delas na folha de estilos, criando assim um padrão de layout para a página.
<br>
<br>
Por último, a prática mais utilizada e considerada como melhor, é a de criar um arquivo próprio para a folha de estilos de CSS:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="titulo">Título do seu documento</h1>
	<p class="texto">Texto do seu documento</p>
</body>
</html>
```
Temos aqui a linkagem da folha de estilos através de um outro arquivo, na linha `<link rel="stylesheet" href="style.css">`.  
Dentro desse arquivo será possível encontrar diversas regras de CSS que irão definir a aparência e o comportamento da página web de várias formas diferentes.

## Regra de CSS

```
p{font-size: 18px;}
```
Uma regra de CSS define o estilo e comportamento para uma seleção de elemento(s) no documento HTML. 

É definida por um seletor (no caso, `p`) e uma propriedade (`font-size`) seguida de um valor (`18px`), que juntos formam uma declaração (`font-size: 18px`).

Separamos cada uma desses pares de propriedade/valor (declarações) com ponto e vírgula, para constituir as regras de CSS de múltiplas declarações:

```
p{
	font-size: 18px;
	color: red;
}
```
## Seletores de CSS e especificidade

### Seletor universal
Seleciona todos os elementos da página:
```
* {
	color: red;
}
```
**Todos os seletores de maior especificidade ignoram a regra definida 
pelo seletor universal.**
### Seletor de tipo
Seleciona os elementos da tag especificada:
```
div {
  color: red;
}
```
### Seletor de atributo
Seleciona os elementos que contêm um determinado atributo:
```
input[type="text"] {
    border: 1px solid black;
}
```
### Seletor de pseudoclasse

O seletor de pseudoclasse nos permite acessar
um elemento em um estado especial, como quando o elemento
está em hover, ou ativo, ou focado. O estilo definido
será apicado quando o estado especificado pela pseudoclasse for
cumprido:

```
p:hover {
  color: red;
}
```
Os estados mais frequentemente usados são:

- **hover**: Seleciona o elemento quando ele está no estado de hover.
- **focus**: Seleciona o elemento quando ele está no estado de foco.
- **disabled**: Seleciona o elemento quando ele está desativado.
- **first-child**: Seleciona o primeiro elemento filho de uma seleção.
- **last-child**: Seleciona o último elemento filho de uma seleção.
- **visited**: Usado com tags de link (`<a>`), é o estado de quando o link já foi visitado pelo usuário.
- **active**: Seleciona o elemento, geralmente `<a>` e `<button>`, quando este está sendo ativado, ou seja, quando o usuário clica no link ou no botão.

### Seletor de pseudoelemento
Esses seletores são utilizados para estilizar (ou selecionar) uma parte específica
de um elemento:

```
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

A regra acima define que toda primeira linha dos elementos
de parágrafo terão a cor azul e letra maiúscula.

Os seletores de pseudoelementos são muito utilizados para criarem animações
simples em CSS e melhorar a aparência de uma página, deixando-a mais dinâmica.

Abaixo, uma lista dos pseudoelementos mais usados:

- **after**: Usado para inserir e estilizar conteúdos após o elemento selecionado.
- **before**: Usado para inserir e estilizar conteúdos antes do elemento selecionado.
- **first-letter**: Seleciona a primeira letra do seletor especificado.
- **first-line**: Seleciona a primeira linha do seletor especificado.
- **selection**: Seleciona o conteúdo selecionado pelo usuário.

### Combinações de seletores

Para termos ainda mais poder sobre a estilização da página,
podemos combinar dois ou mais seletores e termos ainda mais especificade
sobre os elementos e comportamento que desejamos ajustar:

Existem quatro tipos de combinações de seletores em CSS:
- **COMBINAÇÃO POR DESCENDÊNCIA** *(espaço)*: Seleciona todo elemento especificado pelo seletor2 que 
é descendente do seletor1, como no exemplo abaixo. 

```
div p {
  color: red;
}
```

```
<div>
  <p>Este parágrafo está em vermelho </p>
  <p>Este parágrafo está em vermelho</p>
  <section>
   <p>Eu também estou em vermelho</p>
   <div>
     <p>Eu também estou em vermelho</p>
   </div>
  </section>
</div>
```
<br>

- **SELETOR DE ELEMENTO FILHO** *(>)*: Diferentemente do seletor de descendência, este seletor irá
selecionar apenas os elementos pelo seletor2 que são ***filhos diretos*** do seletor1.
```
div > p {
  color: red;
}
```
```
<div>
  <p>Este parágrafo está em vermelho</p>
  <p>Eu também estou em vermelho</p>
  <section>
   <p>Este parágrafo não está em vermelho, ele não é um descendente direto de uma div</p>
   <div>
     <p>
      Este parágrafo está em vermelho, ele é filho direto de uma div pai.
     </p>
   </div>
  </section>
</div>
```
<br>


- **SELETOR DE ELEMENTO ADJACENTE** *(+)*: Seleciona os elementos que correspondem ao seletor2 que são
diretamente adjacentes ao seletor1.
```
div + p {
  color: red;
}
```
```
<div>
  <p>Este parágrafo não está em vermelho</p>
  <p>Eu também não estou em vermelho</p>
  <section>
   <p>Este parágrafo está em vermelho pois tem uma div como irmão adjacente</p>
   <div>
     <p>Eu também não estou em vermelho</p>
   </div>
   <p>Este parágrafo está em vermelho pois tem uma div como irmão adjacente</p>
   <p>Este parágrafo não está em vermelho pois a div não é seu irmão adjacente</p>
  </section>
  <div>O parágrafo abaixo estará em vermelho</div>
  <p>Sim, estou em vermelho</p>
</div>
```
<br>

- **SELETOR DE ELEMENTO IRMÃO** *(~)*: Seleciona todos os elementos do seletor2 que estão no mesmo nível do seletor1.
```
div ~ p {
  color: red;
}
```
```
<div>
  <p>Este parágrafo não está em vermelho</p>
  <p>Eu também não estou em vermelho</p>
  <section>
   <p>Eu estou em vermelho</p>
   <div>
     <p>Eu não estou em vermelho</p>
   </div>
   <p>Este parágrafo está em vermelho também</p>
   <p>Eu estou em vermelho. Este parágrafo está em vermelho porque é irmão de uma div.
   </p>
   <p>Eu também estou em vermelho./div>
  </section>
  <p>
	Se você adicionar uma div no mesmo nível que eu, eu também ficarei vermelho.
  </p>
</div>
```
<br>

### Especificidade de seletores
Regras de especificidade são as regras que o navegador
usa para aplicar uma hierarquia de estilo quando dois 
estilos conflitantes são passados para as mesmas seleções.

Existem quatro categorias que definem o nível de especificidade de um seletor, são elas, em ordem de especificidade:

1. **Inline style**
2. **IDs**
3. **Classes, atributos e pseudoclasses**
4. **Elementos e pseudoelementos**
5. **Estilo universal**(*{})

É atribuído a cada uma dessas categorias um valor de especificidade:
- **Inline style**: 1000
- **IDs**: 100
- **Classes, atributos e pseudoclasses**: 10
- **Elementos e pseudoelementos**: 1
- **Estilo universal**: 0

Para calcular a especificade de uma regra que usa combinações de seletores, basta somar esses valores e verificar
qual regra tem o maior valor de especificidade.

Se duas regras tiverem o mesmo valor de especificidade, a regra que é aplicada por último se sobressairá.

```
.uma-classe {
  color: blue;
}
#um-id {
  color: red;
}
<div class="uma-classe" id="um-id"> 
  Sou uma div vermelha, já que o valor de especificidade da classe é 100 e a de id é 10, e 100 > 10.
</div>
```

## Definindo cores no CSS
Há basicamente quatro formas de atribuir um valor de cor a uma propriedade no CSS:
#### Palavras-chave de cores
São cerca de 140 cores com nome em letra minúscula.
#### RGB e RGBA
Red, Green & Blue (Alpha)  
  
  Os três primeiros parâmetros aceitam valores de 0 a 255, sendo 0 a falta completa da cor e 255 sua presença completa.   
O quarto parâmetro, alpha, refere-se à opacidade da cor.
```
p {color: rgb(0, 0, 0)};  

p {color: rgba(0, 0, 0, 0)}
```
#### HSL e HSLA
Hue, Saturation e Lightness (Alpha)  
  
  Os três parâmetros se referem a tonalidade (0º a 359º), saturação (0% a 100%) e luminosidade (0% a 100%).  
  Alpha permanece um parâmetro com a mesma lógica que no RGBA, aceita valores de 0 a 1 para determinar a opacidade.
```
p {color: hls(0, 0%, 0%)};

p {color: hlsa(0, 0%, 0%, 0)}; 
```
#### Código Hexadecimal
6 ou 8 caracteres (no caso do Alpha) que permitem definir as cores.
  
  ```
  p {color: #a1c5b4};
  ```
O código hexadecimal oferece a vantagem de ser mais frequentemente usado em ferramentas de design, podendo assim transpor a cor de um lugar a outro com mais facilidade.

### Cores em CSS na prática:
#### Título em fundo verde com palavra-chave
```
h1 {
  background-color: green;
}
```
#### Título em fundo cinza com RGB
```
h1 {
  background-color: rgb(100, 100, 100);
}
```
#### Título em fundo vermelho com transparência no RGBA
```
h1 {
  background-color: rgba(255, 0, 0, 0.5)
}
```
#### Título em fundo verde com HSL
```
h1 {
  background-color: hsl(120, 50%, 50%);
}
```
#### Título em fundo cinza transparente com HSLA
```
h1 {
  background-color: hsla(120, 0%, 80%, .5);
}
```

#### Título em fundo vermelho com HEX
```
h1{
  background-color: #ff0000;
}
```
#### Título em fundo vermelho transparente com HEX
```
h1{
  background-color: #ff0000aa;
}
```

## CSS Box Model
Podemos encarar o documento HTML como um conjunto de caixas que contêm conjuntos de elementos e propriedades, sendo o próprio documento uma caixa retangular constituída por outras caixas.  

Cada elemento possui a área do conteúdo, central ao elemento, padding uma área interna transparente imediatamente a volta do conteúdo e imediatamente a volta do padding temos a border. Por fim, termos a margin, uma área exterior ao elemento, imediata à border. 

![Box Model](https://i.imgur.com/lqO6SW9l.png "Box Model")

## Título no contexto de box model

```
<h1>Título do artigo</h1>
```

![Box Model](https://i.imgur.com/MQMQ1sA.png "Box Model")

## Unidades em CSS
Existem dois tipos de valores de unidades de dimensão em CSS:
### Unidades Absolutas
#### Dimensão fixa, medida exata. Não favorece responsividade.
- **cm** - centímetros
- **mm** - milímetros
- **in** - polegadas
- **px** - píxeis (mais utilizada)
- **pt** - pontos
- **pc** - paicas

### Unidades Relativas
#### Dimensão relacionada a outra dimensão do elemento.

- **em**: Relativo ao tamanho de letra do elemento (3em = 3 vezes o tamanho)
- **ex**: Relativo a x-height da letra atual (pouco usado)
- **ch**: Relativo à largura do zero
- **rem**: Relativo ao tamanho de letra do elemento raiz
- **vw** - Relativo a 1% da largura do *viewport*
- **vw** - Relativo a 1% da altura do *viewport*
- **vmin** - Relativo a 1% da dimensão mínima do *viewport*
- **vmax** - Relativo a 1% da dimenxão máxima do *viewport*
- **%** - Porcentagem relativa ao elemento pai

## Layout e responsivdade
Reponsividade é a capacidade de páginas estilizadas de se adaptarem a diferentes tamanhos de telas.  Hoje em dia, é a finalidade de qualquer layout que ele seja responsivo. 
Podem ser utilizados diversas técnicas para controlar um layout, dentre elas:

- Normal flow  
- Propiedade display
- Floats
- Positioning
- Table layout
- Multiple-column layout
- **Flexbox**
- **CSS Grid**

### Normal flow
Normal flow é simplesmente a inexistência de CSS para estilização, ou seja, a página HTML em seu estado inalterado.

### Propriedades de layout
As propriedades display, float e position são utilizadas para definir o comportamento visual e posicionamento dos elementos dentro da página, gerando assim o layout desejado.

### Flexbox
Flexbox é um método unidimensional de layouts para arranjar os items do documento em linhas e colunas. Por ser unidimensional, é utilizado em casos mais específicos, sendo, no geral, mais apropriado o uso da CSS Grid.

### CSS Grid
CSS Grid é um modelo de arranjamento dos elementos mais moderno, criado para solucionar problemas antigos do web-design, sendo o principal deles a responsividade da página. Diferentemente do Flexbox, o CSS Gid oferece a capacidade de trabalhar o layout de maneira bidimensional.  
Começamos, como no Flexbox, definindo um elemento pai (geralmente div) e atribuindo a ele o atributo `display`com o valor `grid`. Esta div pai recebe o nome de Grid Container.