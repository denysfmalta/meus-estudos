# HTML5
## Hyper Text Markup Language
Assim como Markdown, HTML não é classificada como linguagem de programação e sim como linguagem de marcação.   

Seus elementos contêm tags que "marcam" o documento de determinado forma, daí a importância de produzir documentos HTMLs semânticos.

O termo "hyper text" está relacionado com o conceito de hiperlinks, que caracterizam a forma que navegamos nas páginas webs.

## Elemento de HTML
```
<h3>...</h3>

<p>...</p>

<small>...</small>

<i>...</i>

<u>...</u>
```

Um elemento de HTML é constituído de uma tag de abertura, o conteúdo e uma tag de fechamento.

Neste caso, se trata de um elemento de parágrafo, definida pela tag `<p>`.

## Estrutura base de uma página HTML

```
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
	</body>
</html>
```

O elemento `<!DOCTYPE html>` é imprescendível para todo documento HTML. Ele informa o browser que deve interpretar a página HTML como uma página HTML.

Abaixo, vemos a organização dos elementos através do aninhamento, elementos dentro de elementos. Todos os elementos são aninhados dentro da tag `<html>`. 

Dentro da tag `<head>` há informações de metadados, como título da página, ícone, importação de scripts e mais.

Aninhado na tag `<body>` é onde aparece o conteúdo visível da página (parágrafos, frases, tabelas, imagens, etc).

## Elementos vazios
Alguns elementos de HTML não possuem uma tag de fechamento. 

 São determinados como elementos vazios:
 ```
 <hr> <!-- cria uma linha que separa seções do documento-->
 <br> <!-- quebra uma linha-->
 ```
 
 ## Listas ordenadas e desordenadas
 Usamos estes elementos para fazer uma lista enumerada:
 ```
 <ol>
 	<li>...</li>
 	<li>...</li>
 	<li>...</li>
 </ol>
 ```
 E estes para fazer uma lista de bullets:
 ```
 <ul>
 	<li>...</li>
 	<li>...</li>
 	<li>...</li>
 </ul>
 ```
 
## Links/hiperligações

Elementos interativos que navegam para uma outra página do  mesmo site, ou para um outro site, ou para uma outra seção dentro da mesma página. Obrigatoriamente precisam conter um atributo href.

```
<a href="www.google.com">Ir para o Google</a>
```

### Target
Propriedade que define o comportamento de um link, podendo receber o valor `_self` para abrir o link na mesma aba e `_blank` para abrir em uma nova.

### Title
Propriedade que define o texto que aparece ao colocar o cursor da mouse por cima do link.

### Download
Atributo que força o navegador a baixar o conteúdo de servidor interno do link que o recebe.

 ## Imagens
 Para adicionarmos imagens à página, utilizamos o elemento "img", passando dentro do atributo "src" o endereço (local ou link) da imagem.
 
 ```
 <img src="imagem_001.jpg" alt="nome">
 ```
 
 ## Atributos
Atributos são propriedades adicionais para configurar ou alterar o comportamento dos elementos.

O elemento HTML pode conter um atributo. Em alguns casos, seu uso é obrigatório.
O atributo é definido dentro da tag de abertura de um elemento.


```
<a href="www.google.com">Visitar o Google</a>
```
Como vemos acima, a tag `<a>` pede um atributo "href", que é o endereço da página ou seção a ser linkada pelo elemento.

### Atributos Globais
São atributos que podem ser usados em todos os elemento HTML.
Os mais usados são:
-  **id**: identifica de forma única um elemento no documento HTML.
- **class**: lista de classes de um elemento HTML.

## Tabelas
Uma tabela é um conjunto de células (que é a intersecção de uma coluna e uma linha onde é apresentado um valor). Para construir uma tabela em HTML são utilizados vários elementos e seus respectivos atributos. Há estruturas simples e mais complexas. Podem existir várias tabelas na mesma página.  
As tabelas são apenas estruturas visuais sem funcionalidade associada.

```
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<table>
			<tr>
				<td>Coluna 1 - Linha 1</td>
				<td>Coluna 2 - Linha 1</td>
				<td>Coluna 3 - Linha 1</td>
			</tr>
			<tr>
				<td>Coluna 1 - Linha 1</td>
				<td>Coluna 2 - Linha 1</td>
				<td>Coluna 3 - Linha 1</td>
			</tr>
			<tr>
				<td>Coluna 1 - Linha 1</td>
				<td>Coluna 2 - Linha 1</td>
				<td>Coluna 3 - Linha 1</td>
			</tr>
	</body>
</html>
```

## Comentários
Toda linguagem de programação (por mais que HTML não seja uma) possui uma síntaxe para comentários.   
No caso do HTML, é esta:
```
<!-- Comentário de HTML -->

<!-- Primeira linha
	 Segunda linha
 -->
```

## Entities e Symbols
Como fugir da síntaxe de tags, por exemplo, se quiséssemos usar uma palavra entre chaves no nosso documento HTML?


```
<h3>Título do artigo <provisório></h3>
```
Para representarmos o sinal de maior que e menor que sem entrar em conflito com os caracteres reservados de HTML, fazemos o seguinte:

```
<h3>Título do artigo &lt;provisório&gt;</h3>

<h3>Título do artigo &#61;provisório&#62;</h3>
```
Também é usado esse tipo de codificação para incluirmos outros tipos de entidades:

```
<span>Nome da empresa &copy; 2030 - Marca registrada &reg; Empresa</span>
```

Para colocarmos vários espaços entre uma palavra e outra:

```
<p>Quero colocar vários espaços entre palavras: PRIMEIRA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
```

## Formulários
**Como funciona um formulário de HTML?**  

Um formulário de login permite que o usuário o preencha com seu email ou username e uma senha e ao clicar no botão de "Sign in" o formulário submete as informações a um servidor web. Esse processo é designado como um request via POST.  
O servidor web ao receber a informação vai tratá-lo como uma requisição, comunicar com o banco de dados para validar as informações e enviar de volta ao usuário uma resposta, seja um erro ou um login efetuado com sucesso.

De forma mais simples, desconsiderando o tratamento da informação e focando apenas no HTML, o formulário é um conjunto de elementos que permite que o usuário os preencham.

### Problemas de segurança das validações de HTML

As validações padrões de HTML não são suficientes para garantir a segurança dos formulários de uma aplicação. É possível usar como um primeiro layer de validação, mas tanto a validação de HTML quanto até mesmo a de JavaScript é feita no client-side, ou seja, um usuário mais experiente poderiam ultrapassá-las.  

**Por esse motivo, é essencial fazer a validação do lado do servidor.**

## Paths relativas e Paths absolutas

Paths relativas são definidas a partir da posição do documento. Suponha um projeto em HTML, CSS e JavaScript que esteja estruturado no padrão mais comum, com o index.html na raiz do diretório e os demais arquivos dentro de suas respectivas pastas, dentro da pasta "assets".  
A path relativa para importação do arquivo CSS nesse caso seria, por exemplo:

```
<link rel="stylesheet" href="assets/css/app.css">
```
Também podemos usar a síntaxe de "../" para caminhar entre os diretórios


```
<link rel="stylesheet" href="../../app.css">
```

Já a path absoluta usa o endereço web *hard coded* dentro do atributo href:

```
<link rel="stylesheet" href="http://127.0.0.1:5500/assets/css/app.css">
``
