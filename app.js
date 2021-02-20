const express = require("express");
const dotenv = require("dotenv")
const connectDb = require("./config/db");
const morgan = require("morgan");
const Cors = require("cors")
const API = require("./routes/index")
//Load Config
dotenv.config({ path: "config/.env" })

const PORT = process.env.PORT || 5000
const app = express();

if(process.env.NODE_ENV =="development"){
    app.use(morgan("dev"))
}
//DB initiate
connectDb()

app.use(Cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(API)


// app.get("/",(req,res)=>{
//     res.send("welcome")
// })


app.listen(PORT,(err)=>{
if(err){
    console.log(`Server not Running:${err}`);
}
console.log(`Server Running in:${process.env.NODE_ENV} and PORT:${PORT}`);
})

module.exports = app