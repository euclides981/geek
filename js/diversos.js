let caminhoDiversos = 'https://euclides981.github.io/geek/img/produtos/diversos/'
const diversos = [
    {
        id: 0,
        imagem: `${caminhoDiversos}matrix-caneca.jpg`,
        titulo: `Caneca Matrix`,
        valor: `R$ 59,99`,
        botao: `Ver Produto`
    },
    {
        id: 1,
        imagem: `${caminhoDiversos}apple-watch.jpg`,
        titulo: `Apple Watch S 3`,
        valor: `R$ 1.859,99`,
        botao: `Ver Produto`
    },
    {
        id: 2,
        imagem: `${caminhoDiversos}king-of-tokyo-dark-edition.jpg`,
        titulo: `King of Tokyo`,
        valor: `R$ 469,99`,
        botao: `Ver Produto`
    },
    {
        id: 3,
        imagem: `${caminhoDiversos}camiseta-controle-super-nintendo.jpg`,
        titulo: `Camiseta Nintendo`,
        valor: `R$ 89,99`,
        botao: `Ver Produto`
    },
    {
        id: 4,
        imagem: `${caminhoDiversos}caneca-descarregando.jpg`,
        titulo: `Caneca Battery`,
        valor: `R$ 59,99`,
        botao: `Ver Produto`
    },
    {
        id: 5,
        imagem: `${caminhoDiversos}oculus-rift-s.jpg`,
        titulo: `Oculus - Rift S`,
        valor: `R$ 5.999,99`,
        botao: `Ver Produto`
    }
]

const listaDiversos = document.querySelector('.diversos')

function criadorDiversos() {
   const newDiversos = diversos.map(function(diversos) {
    return ` 
    <div class="produtos__item">
    <img class='produtos__imagem' src="${diversos.imagem}" alt="">
    <p class='produtos__titulo'>${diversos.titulo}</p>
    <p class='produtos__valor'>${diversos.valor}</p>
    <button class='produtos__botao'>${diversos.botao}</button>
    </div>
`
    })
    return newDiversos
}
const criaDiversos = criadorDiversos()

const prodDiversos = `${criaDiversos.join('')}`

listaDiversos.insertAdjacentHTML('beforeend', prodDiversos)