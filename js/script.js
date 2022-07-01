var lupa = document.querySelector('.botoes__lupa')
var campo = document.querySelector('.pesquisa_menor')

lupa.addEventListener('click', () => {
    campo.classList.toggle('pesquisa_menor')
})