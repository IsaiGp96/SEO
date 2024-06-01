const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())

app.get('/', (re, res) => {
    return res.json("Desde el Back End");
})

app.listen(8081, ()=>{
    console.log("Escuchando...")
})