let caminhoConsoles = 'https://euclides981.github.io/geek/img/produtos/consoles/'
const consoles = [
    {
        id: 0,
        imagem: `${caminhoConsoles}atari.jpg`,
        titulo: `Atari`,
        valor: `R$ 1.259,99`,
        botao: `Ver Produto`
    },
    {
        id: 1,
        imagem: `${caminhoConsoles}nintendo-switch.jpg`,
        titulo: `Nintendo Switch`,
        valor: `R$ 2.599,99`,
        botao: `Ver Produto`
    },
    {
        id: 2,
        imagem: `${caminhoConsoles}mega-drive.jpg`,
        titulo: `Mega Drive`,
        valor: `R$ 1.399,99`,
        botao: `Ver Produto`
    },
    {
        id: 3,
        imagem: `${caminhoConsoles}ps5.jpg`,
        titulo: `PS5`,
        valor: `R$ 4.879,99`,
        botao: `Ver Produto`
    },
    {
        id: 4,
        imagem: `${caminhoConsoles}sega-saturn.jpg`,
        titulo: `Sega Saturn`,
        valor: `R$ 1.429,99`,
        botao: `Ver Produto`
    },
    {
        id: 5,
        imagem: `${caminhoConsoles}xbox-series-s.jpg`,
        titulo: `Xbox Series S`,
        valor: `R$ 2.299,99`,
        botao: `Ver Produto`
    }
]

const listaConsoles = document.querySelector('.consoles')

function criadorConsoles() {
   const newConsoles = consoles.map(function(console) {
    return ` 
    <div class="produtos__item">
    <img class='produtos__imagem' src="${console.imagem}" alt="">
    <p class='produtos__titulo'>${console.titulo}</p>
    <p class='produtos__valor'>${console.valor}</p>
    <a class='produtos__botao' href="/produtos/?${console.id}">${console.botao}</button>
    </a>
    </div>
`
    })
    return newConsoles
}
const criaConsoles = criadorConsoles()

const prodConsoles = `${criaConsoles.join('')}`

listaConsoles.insertAdjacentHTML('beforeend', prodConsoles)