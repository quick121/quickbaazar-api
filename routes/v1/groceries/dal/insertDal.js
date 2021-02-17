const router = require('express').Router();
// const { signup } = require("../../../services/auth");
const { InsertDal } = require("../../../../services/dalServices");

const aws = require('aws-sdk')
const multerS3 = require('multer-s3')
const multer = require('multer')

const s3 = new aws.S3({
    accessKeyId: 'AKIAI3BOZD2X2N7G3FQQ',
    secretAccessKey: '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',
    region: 'ap-south-1'
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png") {

        cb(null, true);
    } else {
        cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
    }
}
var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'quickbazarbinary',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})

var uploadImg = multer({
    fileFilter,
    storage: multerS3({
        s3: s3,
        bucket: 'ozochat/Replica',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})

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
router.post("/insertDal", upload.single('image'), InsertDal);

module.exports = router