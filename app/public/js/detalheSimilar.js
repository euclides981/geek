
var url = window.location.href

var id = url.split('=')[1]

const detalheSimilar = document.querySelector('.detalhe-novo')

function montaDetalhe() {

    return ` 
            <div class="detalhe">
                <div class="detalhe__titulo">${similares[id].titulo}</div>
                <div class="detalhe__imgDesc">
                <div class='detalhe__img'>
                <img class="detalhe__imagem" src="${similares[id].imagem}" alt="${similares[id].alt}">
                </div>
                    <p class="detalhe__desc">${similares[id].desc}</p>
                </div>
                <p class="detalhe__valor">${similares[id].valor}</p>
            </div>
        `
}

if(detalheSimilar != null){
    detalheSimilar.insertAdjacentHTML('beforeend', montaDetalhe())
}