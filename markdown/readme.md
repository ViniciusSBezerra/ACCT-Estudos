# O que é Markdown ?
## De acordo com a Wikipedia :

Markdown é uma linguagem de marcação leve com sintaxe de formatação de texto simples projetada para que ela possa ser convertida em HTML e muitos outros formatos usando uma ferramenta com o mesmo nome. Markdown é usado frequentemente para formatar arquivos readme, para escrever mensagens em fóruns de discussão on-line e para criar texto rico usando um editor de texto simples.

**SIMPLESMENTE: É APENAS OUTRO TIPO DE ARQUIVO DE TEXTO, COMO .txt .doc .... (agora é .md :risos:) E COM UMA SINTAXE ESPECIAL.**

Não existe um padrão de Markdown claramente definido. Isso levou à fragmentação, pois fornecedores diferentes escrevem suas próprias variantes do idioma para corrigir falhas ou adicionar recursos faltantes. Uma lista de versões de Markdown está disponível aqui.

A partir de agora, este guia se concentrará principalmente na versão Markdown para Github .

# Porque usar Markdown?
## Porque é :

### FÁCIL : A sintaxe é tão fácil que você pode aprender em um minuto ou dois, em seguida, escreva sem perceber nada estranho ou nerd.
### RÁPIDO : Ele economiza tempo em comparação com outros tipos de arquivos / formatos de texto. Isso ajuda a aumentar a produtividade e os fluxos de trabalho do escritor.
### LIMPO : Tanto a sintaxe como a saída são limpas, sem confusão com nossos olhos e simples de gerenciar.
### FLEXÍVEL : Com apenas algumas configurações, o seu texto será traduzido atravessando qualquer plataforma lá fora, editável em qualquer software de edição de texto e conversível para uma ampla variedade de formatos.

#### Em resumo, os usuários comuns acharão útil em todos os casos, especialmente quando você precisar de algo melhor que o texto simples, mas menos funcional do que o Microsoft Word.
Para desenvolvedores, Se você é preguiçoso para escrever código HTML, você vai adorar o markdown. Além disso, Github e muitos sites favorecem o markdown para o arquivo readme de projetos. Isso significa que você vai encontrar o markdown em sua vida de uma forma ou de outra.


# Sintaxe do Markdown

Toda a sintaxe pode ser encontrada aqui . Seria necessário muito esforço para descrever a sintaxe no texto (eles serão formatados), então, considere esta tabela abaixo para toda a sintaxe básica.


### texto em itálico: \* *
### texto em negrito: \** **

### links inline: [texto] + (url).

### imagens:? ![legenda](url da imagem).

### link + imagens: [![Legenda](url da img)](url para a pagina)].

### Notas de rodapé: Eu tenho mais [^1] pra dizer. [^1]: diga aqui.

### Quebras de linha: Double space + enter.

### Listas não ordenadas: * Item1 *Item 2.

### Listas Ordenadas	1. Item a 2. Item b.

### Listas mistas	1. Item 1 * item 1a.

### Citação	> Texto citado.

### Preformatted: Comece cada linha com, dois espaços ou mais, faça o look do texto, e x a t a m e n t e, como, você, tipo i, s, t, o.

### Código:	`Insira o código usando ` ` `

### Bloco de código/ Destaque de Sintaxe:


### Títulos: #, ##, ###, ####, #####, ###### (from h1 to h6)

### Riscado: ~Insira o texto aqui~

### Notas úteis :
O Markdown permite que você use escapes de barra invertida para gerar caracteres literais que de outra forma teria um significado especial na sintaxe de formatação da Markdown. Um personagem de escape de barra invertida comumente usado é : \
Assim? \ * Este \ * não é mais itálico, mas é cercado por asteriscos literais.

Os vídeos do Youtube requerem algum trabalho adicional.

Eles não podem ser adicionados diretamente, mas você pode adicionar uma imagem com um link para o vídeo como este:
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="Texto ALT da imagem aqui" width="240" height="180" border="10" /></a>
