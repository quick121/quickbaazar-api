const Dal = require("../model/Groceries/Dal");

module.exports = {
    InsertDal: async (req, res) => {
        let Body = req.body;
        let File = req.file
        const dalInstance = Dal({
            productName: Body.productName,
            types: Body.types,
            imageUrl: File.location,
            price: Body.price
        })
        try {
            const dal = await dalInstance.save()
            console.log(JSON.parse(JSON.stringify(dal)));
            res.send({
                statusCode: 200,
                msg: "successfull uploaded",
                data: JSON.parse(JSON.stringify(dal))
            })
        } catch (err) {
            res.send({
                statusCode: 500,
                msg: "Bad request",
                err: JSON.parse(JSON.stringify(err))
            })
        }
    },

    ListDal: async (req, res) => {
        // let Body = req.body;
        // const listDal = await Dal.find()

        try {
            const listDal = await Dal.find()
            res.send({
                statusCode: 200,
                msg: "successfull uploaded",
                data: JSON.parse(JSON.stringify(listDal))
            })

        } catch (err) {
            res.send({
                statusCode: 500,
                msg: "Bad request",
                err: JSON.parse(JSON.stringify(err))
            })
        }
    }
}