const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log("App is starting with port number :",port);
});

app.get("/home/:username",(req,res)=>{
    const instaData = require("./data.json");

    res.render("index.ejs",{instaData});
})