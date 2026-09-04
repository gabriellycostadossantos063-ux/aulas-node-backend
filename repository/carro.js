import carro from '../model/carro.js'
 
// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryCarro {
   
    async find() {
        const carros = await carro.findAll()
 
        return carros
    }
 
    async findById(id) {
        const carroDetalhe = await carro.findByPk(id)
 
        return carroDetalhe
    }
 
    async Create(marca, ano) {
        const carroCreate = await carro.create({ marca, ano})
 
        return carroCreate
    }
 
    async Update(id, marca, ano) {
        const carroAlterar = await carro.findByPk(id)
 
        if(!carroAlterar){
            throw new Error("Carro não encontrado")
        }
 
        carroAlterar.marca = marca
        carroAlterar.ano = ano
 
        await carroAlterar.save()
 
        return carroAlterar
    }
 
    async Delete(id) {
        const carroDeletar = await carro.findByPk(id)
 
        if(!carroDeletar){
            throw new Error("Carro não encontrado")
        }
 
        await carroDeletar.destroy()
 
        return carroDeletar
    }
}
 
export default new RepositoryCarro()