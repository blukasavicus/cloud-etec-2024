const express = require ('express')
const server = express()
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static('public'))
server.use(express.json()) //Possibilidade de usar JSON
//Eu desenvolvedor, criei este ENDPOINT
//http://localhost:3000/cadastro
server.get('/cadastro', (req, res) => {
   res.sendFile(path.join(__dirname, 'views/index.html'))
})
server.post('/cadastro', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views/home.html'))
})
server.get('/pets', (req,res)=> {
    res.send({
        name: "Meu gato",
        idade: "4 anos",
        peso: "300kg"
    })
})
server.listen(3000, () => {
    console.log("Servidor no ar...")
})