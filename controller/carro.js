import ServiceCarro from '../service/carro.js'

class ControllerCarro {

    //Recebimento e a Sai´da das info
    Buscar(_, res)  {
        try {
            const carros = ServiceCarro.Buscar()
            res.send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensage: error.message
            })
        }
    }
    Detalhe(req, res)  {
    try {
        const id = req.params.id
        const carro = ServiceCarro.Detalhe(id)
        

    res.send({ mensagem: carro})

    }catch (error) {
            res.status(500).send({
                mensage: error.message
            })
        }
    
    }

    Criar(req, res)  {
    const { id,marca,ano } = req.body

    ServiceCarro.Criar(id, marca, ano)
    
    res.send({ mensagem: "Cadastrado com sucesso"})
}

    Alterar(req, res) {
        try {
        res.send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensage: error.message
            })
        }
        
    }
    
    Deletar(req, res) {
        try{
            const identificador = req.body.id

            ServiceCarro.Deletar(identificador)
            
            res.send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

    

export default  new ControllerCarro()