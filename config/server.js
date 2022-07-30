/* Módulo de configuração do Server */

//Requisitando a biblioteca Express
const express = require('express')

//Atribuindo a variável app a biblioteca exprexx
const app = express()

//Definir o motor de views como sendo o EJS
app.set('view engine', 'ejs')

//Setar diretório de views EJS
app.set('views', './app/views')

//Configuração dos caminhos dos arquivs estáticos
app.use(express.static('./app/public'))


//fazendo a exportação das configurações do sever
module.exports = app