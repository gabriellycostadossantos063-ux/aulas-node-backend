import express from 'express'
import ControllerCarro from "../controller/carro.js"

const router = express.Router()

router.get("/buscar", ControllerCarro.Buscar)
router.get("/detalhe/:id", ControllerCarro.Detalhe) 
router.post("/criar", ControllerCarro.Criar)
router.post("/alterar", ControllerCarro.Alterar)
router.post("/deletar", ControllerCarro.Deletar )

export default router