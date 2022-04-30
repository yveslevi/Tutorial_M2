const express = require('express')
const path = require('path')
const port = 2003
const app = express()


app.use(express.static(path.join(__dirname,"curriculo")))

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port,()=>{
    console.log("servidor iniciado na porta http://localhost:2003/")
})