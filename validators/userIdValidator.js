const userIdValidator = (req,res,next)=>{
    let { userId } = req.params
    if (userId > 20){
        next(new Error("no existen id mayores a 20")) // se manda un error al siguiente middleware ESPECIALIZADO en trabajar errores (err,req,res,next)
    }
    
    next()
}

module.exports = userIdValidator