const {initialDatabase} = require("./db/db.connection");
require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const port = 4001 || process.env.PORT;
const todoRoutes = require("./routes/todosRoutes.js")

initialDatabase();
app.use(express.json());
app.use(cors());

app.use("/api/todos",todoRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})






