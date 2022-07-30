var nova = JSON.parse(localStorage.getItem('db_produtos')) || []

if(nova.length != 0) {
    document.getElementById('babe').innerHTML = `
        <div class="produtos__titulo__principal">Vários</div>
        <div class="produtos__tudo"><a href="varios">Ver Tudo ▶</a></div>
    `
}