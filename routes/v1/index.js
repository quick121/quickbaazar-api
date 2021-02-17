const user = require('./user');


const router = require('express').Router();
const v1 = require('./groceries')




// module.exports = router.use(v1);

module.exports = [...user, ...v1]