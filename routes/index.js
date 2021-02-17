const router = require('express').Router();
const v1 = require('./v1')


router.get("/",(req,res)=>{
    res.send("welcome to the quick-bazaar api")
})


module.exports = router.use(v1);
