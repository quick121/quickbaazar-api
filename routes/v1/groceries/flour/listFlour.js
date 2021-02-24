const router = require("express").Router()
const { ListFlour } = require("../../../../services/flourService")


router.get("/list-flour", ListFlour)

module.exports = router
