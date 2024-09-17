//Vou instalar o express - 
//Gerenciador de pacotes - NPM

const express = require('express')
const server = express()

//Importar para ter acesso ao caminho dos arquivos
const path = require('path')

//Expor aquivos estáticos
server.use(express.static('public'))
server.use(express.json())//Possibilidade de usar JSON
//Eu desenvolvedor, criei este ENDPOINT 
server.get('/cadastro', (req,res)=>{
     res.sendFile(path.join(__dirname, 'views/index.html'))
})

server.get('/pets', (req,res)=>{
    res.send({
        name: "nina",
        idade: "11 anos",
        peso:"7kg"
    })
})

//Expor para o mundo na porta 3000
server.listen(3000, () => {
    console.log("Servidor no ar...")

})