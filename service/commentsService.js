const {commentsBBDD} = require("../localRepo/db")
// en esta capa se deberian realizar toda la logica de negocio y conecciones con la base de datos


let getAllServ = (res)=>{
    return res.status(200).json(commentsBBDD.getAll())
}

let getWithUserIdServ = (res,userId)=>{
    let yourComments = commentsBBDD.getOneWith(userId)
    if (!yourComments){
        return res.status(400).json({"error": `no existe un comentario de con ese userId: ${userId.userId}`})
    }
    return res.status(200).json(yourComments)
}

module.exports = { getAllServ, getWithUserIdServ}