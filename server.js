const express=require("express")


// Parse incoming JSON requests
// app.use(express.json());
var app=express();
let port=3000
app.listen(3000,(req,res)=>{
    console.log("port:",port)
})
