const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/About',(req,res)=>{
    res.send("About Page");
})
app.get('/Contact',(req,res)=>{
    res.send("Contact Us Page");
})

app.listen(8081,()=>{
    console.log("Dhruv Bhatt Express Server!!")
})