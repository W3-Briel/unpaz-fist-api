//importaciones
const express = require("express") /*devuelve una funcion express*/
const { comments } = require("./localRepo/db")
const commentsRouters = require("./router/commentsRouter")
const errorHandler = require("./middleware/errorHandler")

//constantes de config
const APP = express()
const PORT = 3000 /* se podria sacar a un archivo de configuraciones*/

//la aplicacion por defecto leera json en las request
APP.use(express.json())

APP.use("/api",commentsRouters)

APP.use(errorHandler)

// //subir un comentario
// APP.post("/api/comments",(req,res) => {

//     let body = req.body
//     if (body.id && body.userId && body.message && body.createDate){
            
//             comments.push(body)
//             return res.status(200).json({"message": "se subio el comentario correctamente"})
//         }
    
//     return res.status(400).json({"message":"che todo mal, creo que te falta un atributo en el json"})
// })

// si el servidor tiene problemas para conectarse, podemos usar el error con una callback para salvar el flujo del programa
APP.listen(PORT, (error)=> {
    if (error) return console.warn("che no funciona: ",error)
    console.info("el servidor esta escuchando en el puerto: ",PORT)
})