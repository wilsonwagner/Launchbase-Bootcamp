//Nosso próprio servidor!

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public')) // Pegar o style .css
server.set('view engine', 'njk') //Motor que pretendo utilizar.



nunjucks.configure('views', {
    express: server,
    autoescape: false, //Imprimir html com links.
    noCache: true
})

// ========================= PÁGINAS =========================

server.get('/', function(req, res){
    const about = {
        avatar: "https://avatars1.githubusercontent.com/u/45144908?s=460&u=1863ddc7f8b3457b9114902676a335415b2109e0&v=4",
        name: "Wilson Wagner",
        role: "Estudante de Sistemas De Informação",
        description: "<p>Estudante no curso de 'Sistemas De Informação' no <a href='https://www3.cin.ufpe.br/br/'>Centro de Informática</a> na Universidade Federal de Pernambuco.</p>",
        links: [
            { name: "Github", url: "https://www.github.com/wilsonwagner"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/wilsonwagner/"},
            { name: "Behance", url: "https://www.behance.net/wilsonwagner"}
        ] 

    
    }
    return res.render("about", { about }) //Renderizando o arquivo about.html
})

server.get('/projetos', function(req, res){
    return res.render("projetos", {items: videos}) //Renderizando o arquivo projetos.html
})

//Utilizando Query String, iremos pegar o ID dos vídeos para conseguir ter acesso a uma nova página agora utilizando o ID.

server.get('/video', function(req, res){
    const ID = req.query.id

    //Essa função tem como objetivo pegar o ID de data.us.
    const video = videos.find(function(video){
        return video.id == id //Retorna quando for True. 
    })

    //Caso não encontre o vídeo:
    if (!video){
        return res.send("Video não encontrado!")
    }

    //Caso encontre:
    return res.render("video", { item: video })
})
// ========================= ^ =========================

server.listen(5000, function(){
    console.log("Server está rodando!")
})