import express from 'express'
import bancoDeDados from '../repository/index.js'

const router = express.Router()

router.get("/somar",(req, res) => {
   const {num1,num2} = req.query
   const resultado = Number(num1) + Number(num2)
   res.status(200).send({message: resultado})
})


router.get("/api/salario",(req, res) => {
    const {valor,hora} = req.query
    const resultado = valor*hora
    res.status(200).send({message: resultado})
})


router.get("/peso", (req,res) => {
    const {peso1,peso2,peso3,peso4,peso5} = req.query
    const resultado = (peso1,peso2,peso3,peso4,peso5)/5
    res.status(200).send({message: resultado})
})

router.get("/temperatura",(req,res) => {
    const {celsius} = req.query
    const resultado = (9*celsius + 160)/5;
    res.status(200).send({message: resultado})
})

router.get("/distancia",(req,res) => {
    const {milhas} = req.query
    const resultado = (1.60934)
    res.status(200).send({message: resultado})
})

router.get("duracao",(req,res) => {
    const {horas,minutos,segundos} = req.query
    const resultado =(10.00/3600,2800/60)
})
export default router