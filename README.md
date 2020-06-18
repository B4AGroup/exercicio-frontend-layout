![http://www.b4agroup.com](	https://s3.amazonaws.com/Glambox.Content.MediaObject/MediaFile_16658.png)

A B4A é uma empresa que foi criada em 2017 com a aquisição das empresas Glambox e Men’s Market. Nosso objetivo é redefinir o mercado de beleza no Brasil, e se tornar a referência em inovação no universo digital de beleza & bem-estar.

Hoje, operamos duas marcas principais que são líderes em seus respectivos segmentos: a Glambox, o maior serviço de assinatura de produtos de beleza da América Latina, focado na audiência feminina, e a Men’s Market, o maior e-commerce de produtos de beleza masculinos.

-----

## Sobre o Teste

Olá! Este teste tem como objetivo avaliar algumas de suas habilidades para desenvolvimento de front-end.

Suponha que esteja envolvido em um projeto novo da empresa e que os designers enviem o seguinte arquivo como referência:

![Template enviado](https://s3.amazonaws.com/Glambox.Content.MediaObject/MediaFile_6391.jpg)

O primeiro passo será converter este design estático em HTML e CSS. Você pode utilizar o framework que considerar melhor, recomendamos **Bootstrap** pois o nosso framework utiliza os mesmos conceitos, mas sinta-se livre! :wink:

Após este passo, você deverá criar algumas interações via JavaScript, nos blocos de enquete e outras ofertas.
 
No bloco de enquete, você deverá fazer com que o clique do botão:

- Envie a resposta para o servidor
- Lide com o retorno, ou seja, mostre as barras com as porcentagens de cada uma das opções (como ilustrado na imagem)

Você pode usar o JavaScript auxiliar que criamos para simular o envio de uma resposta para o servidor:

```js
// O callback recebe objeto com as porcentagens
Enquete.responder("gostei", callback);
```

No bloco de outras ofertas, você deverá usar a função `carregarMais()`, que envia para um callback as `n` ofertas pedidas, para carregá-las no HTML:

```js
// Callback recebe um vetor com mais 'n' ofertas
Ofertas.carregarMais(n, callback);
```

A única obrigatoriedade do exercício é que o design precisa ser _mobile-first_ e _mobile-friendly_. Não há restrição quanto à biblioteca JavaScript ou framework CSS utilizados.

> Não é obrigatório implementar o carrossel de imagens, mas se quiser pode fazer! :wink:

### Linguagem, tecnologia e bibliotecas

- Código em JavaScript
- A aplicação deve ter um layout responsivo e ser mobile-friendly
- O framework JavaScript/CSS de sua escolha, nossa recomendação de CSS, lembrando, é o **Bootstrap**
- Caso queira, pode utilizar um pré-processador de folhas de estilo

### Avaliação

Iremos avaliar o seu código levando em conta alguns pontos:

- Layout da aplicação
- Navegação e experiência do usuário (UX)
- Utilização de conceitos de _mobile-first design_

