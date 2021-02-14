const User = require('../model/User');
const Bcrypt = require('bcryptjs');

module.exports = {
    RegisterUser: async (req, res) => {
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) return res.status(409).send("use another email");
        const hashPwd = await Bcrypt.hashSync(req.body.password, 10)
        const user = await User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashPwd
        })
        try {
            user.save()
                .then(resData => {
                    res.status(200).send({ resData })
                })
                .catch(err => {
                    res.status(401).send(err)
                })
        } catch (err) {
            res.status(500).send(err)
        }
    }
}