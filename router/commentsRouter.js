const express = require("express")
const router = express.Router()
const commentsController = require("../controller/commentsController")

router
    .get("/comments",commentsController.getAll)
    .get("/comments/:userId",commentsController.getWithUserId)

module.exports = router