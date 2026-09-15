import jwt from 'jsonwebtoken'

const segredo = 'lucky'

export default async function authMiddleware(req, res, next) {
    try {
        const token = req.headers['authorization']
        console.log(token)
        if (!token) {
            throw new Error()
        }

        const decoded = jwt.verify(token, segredo)

        console.log(decoded)
        next()
    } catch (error) {
        res.status(403).send({
            message: "Usuario ou senha invalido"
        })
    }
}