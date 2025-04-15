const commentsService = require("../service/commentsService")
// aca en el controller se deberian preparar los status code y preparar la respuesta a mostrar.

const getAll = (req,res)=>{
    let comments = commentsService.getAll()
    return res.status(200).json(comments)
}
const getByUserId = (req,res) => {
    let { userId } = req.params
    let comments = commentsService.getByUserId({"userId": userId})
    // if (!comments){
    //     return res.status(400).json({"error": `no existe un comentario de con ese userId: ${userId.userId}`})
    // }
    return res.status(200).json(comments)
}

module.exports = { getAll, getByUserId }