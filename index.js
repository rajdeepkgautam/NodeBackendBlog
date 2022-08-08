const express = require("express");
const app = express();
const detailsController = require("./router/data");

// app.get("/home", (req,res)=>{
//     res.send("home");
// })

app.use("/",detailsController)

app.listen(process.env.PORT || 8080 ,function(){
    console.log("Server Running");
})
