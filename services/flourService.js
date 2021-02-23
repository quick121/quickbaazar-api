const Flour = require("../model/Groceries/Flour");

module.exports = {
    InsertFlour: async (req, res) => {
        let Body = req.body;
        let File = req.file
        const flourInstance = Flour({
            productName: Body.productName,
            types: Body.types,
            imageUrl: File.location,
            price: Body.price
        })
        try {
            const flour = await flourInstance.save()
            console.log(JSON.parse(JSON.stringify(flour)));
            res.send({
                statusCode: 200,
                msg: "successfull uploaded",
                data: JSON.parse(JSON.stringify(flour))
            })
        } catch (err) {
            res.send({
                statusCode: 501,
                msg: "Bad request",
                err: JSON.parse(JSON.stringify(err))
            })
        }
    },

    ListFlour: async (req, res) => {
        // let Body = req.body;
        // const listDal = await Dal.find()

        try {
            const ListFlour = await Flour.find()
            res.send({
                statusCode: 200,
                msg: "successfull uploaded",
                data: JSON.parse(JSON.stringify(ListFlour))
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