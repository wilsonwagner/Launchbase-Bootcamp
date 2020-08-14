const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const cursosRocketseat = require('./data.js')

server.use(express.static('public')) // Pegar os arquivos da pasta Public.
server.set('view engine', 'njk') 

//Trazer o sue projeto para o Localhost, não precisando usaro live server por exemplo.
nunjucks.configure('views', {
    express: server,
    autoescape: false
})

// ========================= PÁGINAS =========================

server.get("/", function(req, res){
    const about = {
        avatar: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg",
        name: "Rocketseat",
        name2: "Instituição de Estudo",
        name3: "As melhores tecnologias em programação, direto ao ponto e do jeito certo. No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.🚀",
        links: [
            { name: "Facebook", url: "https://www.facebook.com/rocketseat/" },
            { name: "Twitter", url: "http://twitter.com/rocketseat" },
            { name: "Instagram", url: "http://instagram.com/rocketseat_oficial" },
            { name: "Youtube", url: "http://youtube.com/rocketseat" }
        ]
    }
    return res.render('inicio', { about })
})


server.get("/sobre", function(req, res){
    return res.render('sobre')
})

server.get("/cursos", function(req, res){
    return res.render('cursos', { items: cursosRocketseat })
})

server.get("/cursos/:id", function(req, res) {
    const id = req.params.id;
    const curso = cursosRocketseat.find(function(curso){
        return (curso.id == id);
    })

    if (!cursosRocketseat){
        res.send("Curso não encontrado!")
    }
    //PAROU AQUI:
    return res.render('paginasCursos', {item: curso})
  });

server.use(function(req, res) {
    res.status(404).render("not-found")
})

// ========================= ^ =========================
server.listen(5000, function(){
    console.log("Server 2 está rodando!")
})