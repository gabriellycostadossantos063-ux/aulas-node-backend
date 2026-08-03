import express from 'express'
import router from './router/exercicios.js'

// server ou app
const app = express()

app.use(express.json())
app.use("/api/v1",router)






app.listen(3000,() => {
    console.log("Servidor ouvindo na porta 3000")
})