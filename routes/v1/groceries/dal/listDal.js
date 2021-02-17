const router = require('express').Router();
// const { signup } = require("../../../services/auth");
const { InsertDal, ListDal } = require("../../../../services/dalServices");


router.get("/listDal", ListDal)

module.exports = router;