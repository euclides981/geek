const openModal = () => document.getElementById('modal').classList.add('active')

const openUrl = () => window.location.href = "varios"

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
} 

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_produtos')) || []
const setLocalStorage = (dbProdutos) => localStorage.setItem('db_produtos', JSON.stringify(dbProdutos))

//Deletar Item
const deleteProdutos = (index) => {
    const dbProdutos = readProdutos()
    dbProdutos.splice(index, 1)
    setLocalStorage(dbProdutos)
}

//Editar Banco
const updateClient = (index, client) => {
    const dbProdutos = readProdutos()
    dbProdutos[index] = client
    setLocalStorage(dbProdutos)
}

//Ler Banco
const readProdutos = () => getLocalStorage()


//Criar Banco
const createClient = (client) => {
    const dbProdutos = getLocalStorage()
    dbProdutos.push(client)
    setLocalStorage(dbProdutos)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = '')
    document.getElementById('imagem').dataset.index = 'new'
}

//Salvar Cliente
const saveClient = () => {
    if(isValidFields()) {
        const client = {
            imagem: document.getElementById('imagem').value,
            alt: document.getElementById('alt').value,
            titulo: document.getElementById('titulo').value,
            desc: document.getElementById('desc').value,
            valor: document.getElementById('valor').value,
        }
        const index = document.getElementById('imagem').dataset.index
        if(index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        }
        else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.classList.add('tst');
    newRow.innerHTML = `
        <div class='imgTitulo'>
            <div class='caixa'><img class='imagem' src="${client.imagem}" alt="${client.alt}"></div>
            <div class='tituloGerencia'>${client.titulo}</div>
        </div>
            <textarea class='descGerencia' rows="3" disabled>${client.desc}</textarea>
            <td>R$${client.valor},99</td>
            <td class='btsAdm'>
                <button type="button" class="btnGerenciar btVerde" id='edit ${index}'>Editar</button>
                <button type="button" class="btnGerenciar btVermelho" id='delete ${index}'>Excluir</button>
            </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbProdutos = readProdutos()
    clearTable()
    dbProdutos.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('imagem').value = client.imagem
    document.getElementById('alt').value = client.alt
    document.getElementById('titulo').value = client.titulo
    document.getElementById('desc').value = client.desc
    document.getElementById('valor').value = client.valor
    document.getElementById('imagem').dataset.index = client.index
}

const editClient = (index) => {
    const client = readProdutos()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if(event.target.type == 'button') {

        const [action, index] = event.target.id.split(' ')
        
        if(action == 'edit') {
            editClient(index)
        }
        else {
            const client = readProdutos()[index]
            const response = confirm(`Deseja excluir o produto ${client.titulo}`)
            if(response) {
                deleteProdutos(index)
                updateTable()
            }
        }
    }
}

updateTable()

document.getElementById('cadastrarCliente')
.addEventListener('click', openModal)

document.getElementById('verAdicionados')
.addEventListener('click', openUrl)

document.getElementById('modalClose')
.addEventListener('click', closeModal)

document.getElementById('salvar')
.addEventListener('click', saveClient)

document.getElementById('cancelar')
.addEventListener('click', closeModal)

document.querySelector('#tableClient>tbody')
.addEventListener('click', editDelete)