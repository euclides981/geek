//npm init 
//git init
//npm install express
//npm install ejs


//Recuperando módulo de configuração do Server
const app = require('./config/server')
// recuperando o modulo de consoles
const consoles = require('./app/modulos/consoles')
// recuperando o modulo de Star Wars
const stars = require('./app/modulos/star-wars')
// recuperando o modulo de Diversos
const diversos = require('./app/modulos/diversos')

//Rota Home
app.get('/', function(req,res){
    res.render('home/index', {consoles: consoles, stars: stars, diversos: diversos})
})

//Rota Login
app.get('/login', function(req,res){
    res.render('login/index')
})

//Rota Links
app.get('/links', function(req,res){
    res.render('home/links')
})

//Rota Star Wars
app.get('/star-wars', function(req, res){
    res.render('produtos/star-wars', {stars: stars})   
})
// Rota id Star Wars
app.get('/detalhe-star-wars', function(req, res){
   //Recuperar através do método GET o id
   const id = req.query.id
   res.render('produtos/detalhe-star-wars', { star: stars[id] })
})

//Rota Consoles
app.get('/consoles', function(req,res){
    res.render('produtos/consoles', {consoles: consoles})
})
// Rota id Consoles
app.get('/detalhe-consoles', function(req, res){
   //Recuperar através do método GET o id
   const id = req.query.id
   res.render('produtos/detalhe-consoles', { console: consoles[id]})
   /* res.render('produtos/detalhe-consoles', {diversos: diversos}) */
})

//Rota Diversos
app.get('/diversos', function(req,res){
    res.render('produtos/diversos', {diversos: diversos})
})
// Rota id Diversos
app.get('/detalhe-diversos', function(req, res){
    //Recuperar através do método GET o id
    const id = req.query.id
    res.render('produtos/detalhe-diversos', { diverso: diversos[id] })
})

//Rota Vários
app.get('/varios', function(req, res){
    res.render('produtos/varios')   
})
// Rota id Vários
app.get('/detalhe-nova', function(req, res){
   res.render('produtos/detalhe-nova')
})

// Rota id Similar
app.get('/detalhe-similar', function(req, res){
    res.render('produtos/detalhe-similar')
 })

//Rota Gerenciar
app.get('/gerenciar', function(req, res){
    res.render('login/gerenciar')   
})

//Rota Quem Somos
app.get('/quem-somos', function(req, res){
    res.render('links/quem-somos')   
})

//Rota Politica de Privacidade
app.get('/politica-de-privacidade', function(req, res){
    res.render('links/politica')   
})

//Rota Programa Fidelidade
app.get('/programa-de-fidelidade', function(req, res){
    res.render('links/fidelidade')   
})

//Rota Nossas Lojas
app.get('/nossas-lojas', function(req, res){
    res.render('links/lojas')   
})

//Rota Franquias
app.get('/franquias', function(req, res){
    res.render('links/franquias')   
})

//Rota Anuncie
app.get('/anuncie', function(req, res){
    res.render('links/anuncie')   
})

app.use(function(req, res, next){
    res.render('404', {url: req.url})
})

//Iniciando Servidor
app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando com express\nCTRL+C para fechar`)
})
