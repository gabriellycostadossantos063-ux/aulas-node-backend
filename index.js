import express from 'express'


const app = express()

app.get("/api/v1/somar", (req, res ) => {
 const {num1, num2} = req.query
 const resultado = Number(num1) + Number(num2)

 res.status(200).send({ message: resultado})
})

app.get("/api/v1/subtrair", (req, res ) => {
 const {num1, num2} = req.query
 const resultado = Number(num1) - Number(num2)

 res.status(200).send({ message: resultado})
})

app.get("/api/v1/multiplicacao", (req, res ) => {
 const {num1, num2} = req.query
 const resultado = Number(num1) * Number(num2)

 res.status(200).send({ message: resultado})
})

app.get("/api/v1/divisao", (req, res ) => {
 const {num1, num2} = req.query
 const resultado = Number(num1) / Number(num2)

 res.status(200).send({ message: resultado})
})
app.listen(3000,() => {
    console.log("Servidor ouvindo na porta 3000")
})