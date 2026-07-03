import express from 'express'

// server ou app
const app = express()

app.get("/api/v1/somar", (req, res) => {
    // query params 
    const num1 = Number(req.query.num1) 
    const num2 = Number (req.query.num2) 
    const resultado = num1+num2

    res.send({ resultado })
})

// metodo GET da funcao de subtrair usando QuerryParam
//Com numero 1 e numerou ou num1 e num2
app.listen(3000,() => {
    console.log("Servidor ouvindo na porta 3000")
})