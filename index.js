const express  = require("express")
const app = express();


app.listen(4000,()=>{
    console.log(`APP IS LISTING ON PORT 4000....`)
})

app.get("/",(req,res)=>{
    res.send('<h1>Hiii... Server is up And Running.................</h1>')
})