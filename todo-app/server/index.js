const express = require("express")
const app = express()

app.get('/', (req, res) =>{
    res.send("hello world")
})

app.listen(5000, ()=>{
    console.log("listenig at port 5000")
})