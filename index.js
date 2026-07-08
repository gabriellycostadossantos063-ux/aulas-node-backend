import express from 'express'
import bancoDeDados from './repository/index.js'

// server ou app
const app = express()

// metodo GET da funcao de subtrair usando QuerryParam
//Com numero 1 e numerou ou num1 e num2
app.listen(3000,() => {
    console.log("Servidor ouvindo na porta 3000")
})

app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id

   const pessoa = bancoDeDados.find(it => it.id == id)
    if (!pessoa){
       res.send({ message: "Pessoa nao encontrada" })
   return  
    }
  res.send({ pessoa })
})

app.get("/api/pessoa", (req, res) => {
  const { id, name } = req.query

  if(!id|| !name) {
    res.send({ message: "Favor informar id e name" })
    return
  }
 bancoDeDados.push({ id, name})
 res.send({ message: "Pessoa criada com sucesso"})
})
app.listen(3000,() => {
    console.log("Servidor ouvindo na porta 3000")
})