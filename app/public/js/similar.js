let caminhoSimilares = 'img/produtos/similares/'

const similares = [

    {
        imagem: `${caminhoSimilares}caneca-alura-geek.jpg`,
        titulo: `Caneca Alura Geek`,
        valor: `R$59,99`,
        alt: 'Caneca Branca Alura Geek',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum eius quos veritatis voluptatum soluta deserunt at vel, maiores repudiandae, corporis voluptate ad maxime delectus ex, laudantium accusantium mollitia inventore?`,
    },
    {
        imagem: `${caminhoSimilares}game-stick.jpg`,
        titulo: `Game Stick Retrô`,
        valor: `R$299,99`,
        alt: 'Game Stick Retrô',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum eius quos veritatis voluptatum soluta deserunt at vel, maiores repudiandae, corporis voluptate ad maxime delectus ex, laudantium accusantium mollitia inventore?`,
    },
    {
        imagem: `${caminhoSimilares}camiseta-java-script.jpg`,
        titulo: `Camiseta javaScript`,
        valor: `R$99,99`,
        alt: 'Camiseta javaScript Branca',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum eius quos veritatis voluptatum soluta deserunt at vel, maiores repudiandae, corporis voluptate ad maxime delectus ex, laudantium accusantium mollitia inventore?`,
    },
    {
        imagem: `${caminhoSimilares}bonecos-super-mario.jpg`,
        titulo: `Kit Bonecos S Mario`,
        valor: `R$579,99`,
        alt: 'Três bonecos Super Mário',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum eius quos veritatis voluptatum soluta deserunt at vel, maiores repudiandae, corporis voluptate ad maxime delectus ex, laudantium accusantium mollitia inventore?`,
    },
    {
        imagem: `${caminhoSimilares}almofada-mini-yoda.jpg`,
        titulo: `Almofada Mini Yoda`,
        valor: `R$49,99`,
        alt: 'Almofada Mini Yoda',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum eius quos veritatis voluptatum soluta deserunt at vel, maiores repudiandae, corporis voluptate ad maxime delectus ex, laudantium accusantium mollitia inventore?`,
    },
    {
        imagem: `${caminhoSimilares}controle-sony.jpg`,
        titulo: `Controle - PS5`,
        valor: `R$399,99`,
        alt: 'Controle Sony DualSense - PS5',
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum eius quos veritatis voluptatum soluta deserunt at vel, maiores repudiandae, corporis voluptate ad maxime delectus ex, laudantium accusantium mollitia inventore?`,
    }
]

//Funçã Mostra Adicionados
const adicionados = document.querySelector('.adicionados')
function mostraAdicionados() {
   const montaLista = similares.map((similar, index) => {
    return ` 
        <div class="produtos__item">
        <img class='produtos__imagem' src="${similar.imagem}" alt="${similar.alt}">
        <p class='produtos__titulo'>${similar.titulo}</p>
        <p class='produtos__valor'>${similar.valor}</p>
        <a class='produtos__botao' href="/detalhe-similar?id=${index}">Ver Produto</a>
        </div>
    `
   })
   return montaLista
}
const listaPronta = mostraAdicionados()
const ajustaLista = `${listaPronta.join('')}`
adicionados.insertAdjacentHTML('beforeend', ajustaLista)