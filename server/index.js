import express from "express"
import ConnectDb from "./db/db.js";
const app = express();

app.use('/', (req , res)=>{
    res.send("This jslkjdkljfkljdg")
})

ConnectDb()
const PORT= 3888
app.listen(PORT , ()=>{
    console.log(`server is running on port : ${PORT}`)
})