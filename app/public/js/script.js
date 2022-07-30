//Desenvolvido por euclides981

var lupa = document.querySelector('.botoes__lupa')
var campo = document.querySelector('.pesquisa_menor')
 
lupa.addEventListener('click', () => {
    campo.classList.toggle('pesquisa_menor')
})
/* 
//Manipular menu de navegação
const url_atual = window.location.pathname
if (url_atual == '/') {
    document.getElementById('menuHome').className = 'nav-link text-white active'
}
else if (url_atual == '/noticias' || url_atual =='/noticia') {
    document.getElementById('menuNoticias').className = 'nav-link text-white active'    
}
else if (url_atual == '/admin') {
    document.getElementById('menuAdmin').className = 'nav-link text-white active'
} */

function logar(){
  var usuario = document.getElementById('usuario').value;
  var senha = document.getElementById('senha').value;

  if(usuario == "admin" && senha == "admin") {
    location.href = "gerenciar";
  } 
  else {
    alert('Dados Incorretos, tente: admin admin');
  }
}

var mesH1 = document.getElementById('mes')
var data = new Date()
var mes = data.getMonth()
var mens = 'Promocional'

switch (mes) {
  case 0:
  mesH1.innerHTML = `Janeiro ${mens}`
  break
  case 1:
  mesH1.innerHTML = `Fevereiro ${mens}`
  break
  case 2:
  mesH1.innerHTML = `Março ${mens}`
  break
  case 3:
  mesH1.innerHTML = `Abril ${mens}`
  break
  case 4:
  mesH1.innerHTML = `Maio ${mens}`
  break
  case 5:
  mesH1.innerHTML = `Junho ${mens}`
  break
  case 6:
  mesH1.innerHTML = `Julho ${mens}`
  break
  case 7:
  mesH1.innerHTML = `Agosto ${mens}`
  break
  case 8:
  mesH1.innerHTML = `Setembro ${mens}`
  break
  case 9:
  mesH1.innerHTML = `Outubro ${mens}`
  break
  case 10:
  mesH1.innerHTML = `Novembro ${mens}`
  break
  case 11:
  mesH1.innerHTML = `Dezembro ${mens}`
  break
}