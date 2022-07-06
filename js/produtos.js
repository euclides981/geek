const listaProdutos = document.querySelector('.produtos__sw')

function create() {
   const newProdutos = produtos.map(function(produto) {
    return ` 
    <div class="produtos__item">
    <img class='produtos__imagem' src="${produto.imagem}" alt="">
    <p class='produtos__titulo'>${produto.titulo}</p>
    <p class='produtos__valor'>${produto.valor}</p>
    <button class='produtos__botao'>${produto.botao}</button>
    </div>
`
    })
    return newProdutos
}
const teste = create()

const produtosGeek = `${teste.join('')}`

listaProdutos.insertAdjacentHTML('beforeend', produtosGeek)