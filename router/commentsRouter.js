const express = require("express")
const router = express.Router()
const commentsController = require("../controller/commentsController")
const userIdValidator = require("../validators/userIdValidator")

router
    .get("/comments",commentsController.getAll)
    .get("/comments/:userId",userIdValidator,commentsController.getByUserId)

module.exports = router