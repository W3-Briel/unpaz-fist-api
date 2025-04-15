const {commentsBBDD} = require("../localRepo/db")
// en esta capa se deberian realizar toda la logica de negocio y conecciones con la base de datos

let getAll = ()=>{
    return commentsBBDD.getAll()
}

let getByUserId = (userId)=>{
    return commentsBBDD.getOneWith(userId)
}

module.exports = { getAll, getByUserId}