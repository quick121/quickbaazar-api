const router = require('express').Router();
const { InsertDal } = require("../../../../services/dalServices");
const { uploadSingle } = require("../../../../services/uploadService");


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
router.post("/insertDal", uploadSingle.single('image'), InsertDal);

module.exports = router