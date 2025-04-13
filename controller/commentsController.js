const commentsService = require("../service/commentsService")
// aca en el controller se deberian integrar los middleware de verificaciones

const getAll = (req,res)=>{
    commentsService.getAllServ(res)
}
const getWithUserId = (req,res) => {
    let {params: {userId}} = req
    commentsService.getWithUserIdServ(res, {"userId": userId})
}

module.exports = { getAll, getWithUserId }