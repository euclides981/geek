const carros = {
    marca: 'GM',
    cor: 'Prata',
    ano: '1997',
}

const createCarros = (veiculos) => {
    localStorage.setItem('db_carros', JSON.stringify(veiculos))
}