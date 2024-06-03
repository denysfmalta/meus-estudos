# Markdown Cheatsheet
### Resumo da síntaxe da linguagem de marcação mais utilizada 
###### _Este guia foi desenvolvido usando o livro "The Markdown Guide" de Matt Cone_

## O que é Markdown?

Markdown é uma linguagem de marcação leve, projetada para ser fácil de ler e escrever, bem como fácil de converter em HTML e outros formatos.

É amplamente utilizada para documentações pessoais e de projetos de T.I.

## Parágrafo

### Use uma linha de espaço vazio para separar uma ou mais linha de textos:

###### _Markdown_
Eu gosto muito de usar Markdown.

Acho que vou utilizar de agora em diante.

###### _HTML_
<p>Eu gosto muito de usar Markdown.</p>
<p>Acho que vou utilizar de agora em diante.</p>

## Quebra de linha

### Para criar uma quebra de linha, termine uma linha com dois ou mais espaços e então aperte enter:

###### _Markdown_
Esta é a primeira linha.  
E esta é a segunda linha.

###### _HTML_
<p>Esta é a primeira linha. <br />
E esta é a segunda linha.</p>

## Ênfase

### Você pode adicionar ênfase ao texto tornando-o negrito ou itálico:

###### _Markdown_
**Este texto está em negrito**  

_Este texto está em itálico_

###### _HTML_
<strong>Este texto está em negrito.</strong>

<em>Este texto está em itálico.</em>

---

### Para enfatizar usando negrito e itálico ao mesmo tempo, adicione três astericos ou três underscores:

###### _Markdown_
***Texto enfatizado.***  

___Texto enfatizado.___

###### _HTML_
<strong><em>Texto enfatizado.</em></strong>



## Citações
### Para criar um bloco de citação, adicione > no início do parágrafo:

###### _Markdown_
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id bibendum felis. Aliquam rhoncus hendrerit augue ac vestibulum.

###### _HTML_
<blockquote>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id bibendum felis. Aliquam rhoncus hendrerit augue ac vestibulum.</p>
</blockquote>

---

### Citações podem ser aninhadas. Adicione >> no início do parágrafo que você deseja aninhar:
>Este é o primeiro parágrafo.
>>E este é o parágrafo aninhado.



## Listas Ordenadas
### Para criar uma lista ordenada, escreva os itens por linha com numéros seguidos de ponto final:
###### _Markdown_
1. Primeiro item
2. Segundo item
3. Terceiro item
4. Quarto item

###### _HTML_
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <li>Quarto item</li>
</ol>


## Listas Desordenadas
### Para criar uma lista desordenada, escreva os itens por linha com traços, asteriscos ou símbolos de soma:
###### _Markdown_
- Primeiro item
- Segundo item
- Terceiro item
- Quarto item

###### _HTML_
<ul>
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <li>Quarto item</li>
</ul>

### Listas também podem conter itens aninhados:
###### _Markdown_
1. Primeiro item
2. Segundo item
    1. Segundo item A
    2. Segundo item B
3. Terceiro item
4. Quarto item

###### _HTML_
<ol>
    <li>Primeiro item</li>
    <li>Segundo item</li>
        <ol>
            <li>Segundo item A</li>
            <li>Segundo item B</li>
        </ol>
    <li>Terceiro item</li>
    <li>Quarto item</li>
</ol>

###### _Markdown_
- Primeiro item
- Segundo item
    - Segundo item A
    - Segundo item B
- Terceiro item
- Quarto item


###### _HTML_
<Ul>
    <li>Primeiro item</li>
    <li>Segundo item</li>
        <Ul>
            <li>Segundo item A</li>
            <li>Segundo item B</li>
        </Ul>
    <li>Terceiro item</li>
    <li>Quarto item</li>
</Ul>


## Tabelas
### Para criar uma tabela, use três ou mais hifens (---) para criar o cabeçalho de cada coluna e use pipes (|) para separar cada coluna. Você pode, opcionalmente, adicionar pipes em cada extremidade da tabela:

###### _Markdown_
| Cabeçalho 1 | Cabeçalho 2 |
| ----------- | ----------- |
| Celula 1    | Celula 2    |
| Celula 3    | Celula 4    |

###### _HTML_
<table>
<thead>
<tr class="header">
<th>Cabeçalho 1</th>
<th>Cabeçalho 2</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Celula 1 </td>
<td>Celula 2</td>
</tr>
<tr class="even">
<td>Celula 3 </td>
<td>Celula 2</td>
</table>

## Links
### Para criar um link, coloque o texto do link entre colchetes (por exemplo, [Google]) e, em seguida, adicione a URL entre parênteses imediatamente após:

###### _Markdown_
Acesse o [Google](https://google.com).

###### _HTML_
<p>Acesse o <a href="https://google.com">Google</a></p>

## Código
### Para categorizar uma palavra ou frase como código, feche-o com crases:

`
{
"firstName": "John",
"lastName": "Smith",
"age": 25
}
`

### Para fazer um bloco de código, adicione três crases:

```
{
"firstName": "John",
"lastName": "Smith",
"age": 25
}
```
## Imagens
### Para adicionar uma imagem, coloque um ponto de exclamação (!), seguido do texto alternativo entre colchetes, e o caminho ou URL da imagem entre parênteses. Opcionalmente, você pode adicionar um título após a URL nos parênteses:

![Mariposa](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lymantria_dispar_MHNT.CUT.2012.0.357_Col_de_Cricheto_Bastelica_male_Dos.jpg/800px-Lymantria_dispar_MHNT.CUT.2012.0.357_Col_de_Cricheto_Bastelica_male_Dos.jpg "Mariposa")
 
<br>
<br>
<br>

# Fim
Este guia resumido termina aqui. Reuni os principais elementos da síntaxe básica do Markdown para meu uso próprio. Caso este resumo seja insuficiente, não deixe de buscar informações adicionais em outras fontes.