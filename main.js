const express = require("express")
const APP = express()
const PORT = 3000

// endpoint owner para obtener el nombre del dueño de la api
APP.get("/owner",(req,res)=>{
    res.status(200)/*codigo de estado de la respuesta*/
        .json({"nombre":"angel"})/*usamos este metodo json para respnoder directamente con el formato json, se pueden usar otros con send()*/
})

APP.listen(PORT)
console.info("el servidor esta escuchando en el puerto: ",PORT)