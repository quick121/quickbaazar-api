const router = require('express').Router();
// const { signup } = require("../../../services/auth");
const { RegisterUser } = require("../../../services/createUserService");



/**
 * @swagger
 * /user/register:
 *  post:
 *      description: Use To All Product
 *      responses:
 *          '200':
 *           description: Success
 *          '400':
 *           description: failed request
 *  parameters:
 *      - in: body
 *        price:req.body.price
 *  description:a
 */
router.post("/register", RegisterUser);

module.exports = router