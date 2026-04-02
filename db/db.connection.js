const mongose = require("mongoose")
require("dotenv").config()
const mongoDB = process.env.MONGODB

const initialDatabase = async()=>{
    await mongose.connect(mongoDB).then(console.log("Connected to DB")).catch((error)=>console.log("Connetion failed",error))
}

module.exports = {initialDatabase}