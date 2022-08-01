var nova = JSON.parse(localStorage.getItem('db_produtos')) || []

//Funçã Mostra Adicionados
const adicionados = document.querySelector('.adicionados')
function mostraAdicionados() {
   const montaLista = nova.map((nova, index) => {
    return ` 
        <div class="produtos__item">
        <img class='produtos__imagem' src="${nova.imagem}" alt="${nova.alt}">
        <p class='produtos__titulo'>${nova.titulo}</p>
        <p class='produtos__valor'>R$${nova.valor},99</p>
        <a class='produtos__botao' href="/detalhe-nova?id=${index}">Ver Produto</a>
        </div>
    `
   })
   return montaLista
}
const listaPronta = mostraAdicionados()
const ajustaLista = `${listaPronta.join('')}`
adicionados.insertAdjacentHTML('beforeend', ajustaLista)
