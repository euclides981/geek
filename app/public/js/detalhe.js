var nova = JSON.parse(localStorage.getItem('db_produtos')) || []
// Função id

var url = window.location.href

var id = url.split('=')[1]

const detalheProduto = document.querySelector('.detalhe-novo')

function montaDetalhe() {

        return ` 
            <div class="detalhe">
                <div class="detalhe__titulo">${nova[id].titulo}</div>
                <div class="detalhe__imgDesc">
                <div class='detalhe__img'>
                    <img class="detalhe__imagem" src="${nova[id].imagem}" alt="${nova[id].alt}">
                </div>
                    <p class="detalhe__desc">${nova[id].desc}</p>
                </div>
                <p class="detalhe__valor">R$${nova[id].valor}</p>
            </div>
        `
}

if(detalheProduto != null){
    detalheProduto.insertAdjacentHTML('beforeend', montaDetalhe())
}
