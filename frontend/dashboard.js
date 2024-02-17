const express = require("express");
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, 'styles')))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/dashboard.html');
})

app.listen(3000,()=>{
    console.log("connetcted to server")
})

