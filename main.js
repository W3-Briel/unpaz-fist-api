//importaciones
const express = require("express") /*devuelve una funcion express*/
const comments = require("./localRepo/comments.json")

//constantes de config
const APP = express()
const PORT = 3000

//// estaba pensando una logica de routers asi media primitiva
// const ENDPOINTS = {
//     "owner": {
//         "get": "/owner",
//         "put": "/owner"
//     }
// }

//////////////////////////////////////// EXAMPLE
// endpoint owner para obtener el nombre del dueño de la api
// APP.get("api/owner",(req,res)=>{
//     res.status(200)/*codigo de estado de la respuesta*/
//         .json({"nombre":"angel"})/*usamos este metodo json para respnoder directamente con el formato json, se pueden usar otros con send()*/
// })
/////////////////////////////////////// EXAMPLE

//mostrar todos los comentarios
APP.get("/api/comments",(req,res)=> res.status(200).json(comments) )
//mostrar comentarios con un userId especifico
APP.get("/api/comments/:userId", (req,res)=>{
    let userIdParam = req.params.userId
    let yourComments = comments.filter((comment) => comment.userId == userIdParam)

    if (yourComments.length === 0){
        return res.status(400).json({"error": `no existe un comentario de con ese userId: ${userIdParam}`})
    }

    return res.status(200).json(yourComments)
})

// si el servidor tiene problemas para conectarse, podemos usar el error con una callback para salvar el flujo del programa
APP.listen(PORT, (error)=> {
    if (error) return console.warn("che no funciona: ",error)
    return console.info("el servidor esta escuchando en el puerto: ",PORT)
})