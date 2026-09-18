import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import RepositoryUsuario from '../repository/usuario.js'
 
class ServiceUsuario {
 
    // Core- Regra de Negocio
    async Buscar() {
        return RepositoryUsuario.find()
    }
 
    async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }
 
        const usuario = await RepositoryUsuario.findById(id)
       
        if(!usuario) {
            throw new Error(`ID ${id} do usuario não encontrado`)
        }
 
        return usuario
    }
    // Função(parametros, parametros, parametros)
    async Criar(email, senha) {
         if (!email|| !senha) {
             throw new Error("Favor informar todos os dados")
         }

         const senhaCripto = await bcrypt.hash(senha,12)

         const usuario = await RepositoryUsuario.Create( email, senhaCripto )
 
         return usuario
    }
 
    async Alterar(id, email, senha) {
        if (!id || !email|| !senha) {
            throw new Error("Favor informar os dados");
        }
 
       const senhaCripto = !senha ? undefined: await bcrypt.hash(senha,12)

        const usuarioAlterado = await RepositoryUsuario.Update(id, email, senha)
 
        return usuarioAlteradoAlterado
    }
 
    async Deletar(id) {
 
        if (!id) {
            throw new Error("Favor informar o ID")
        }
       
        const usuario = await RepositoryUsuario.Delete(id)
 
        return usuario
    }
 
    async Login(email, senha) {
      if(!email || !senha) {
        throw new Error("Email ou senha invalido");
        
      }

      const usuario = await RepositoryUsuario.FindByEmail(email)

      if(!usuario) {
        throw new Error("Email ou senha invalido")
      }

      if(
        !(await bcrypt.compare(String(senha), usuario.senha))
      ) {
        throw new Error("Email ou senha invalido");
        
      }

      return jwt.sign(
        {id: usuario.id, email},
        segredo, 
        { expiresIn: 60 * 60 }
      )
    }
}
 
export default new ServiceUsuario()