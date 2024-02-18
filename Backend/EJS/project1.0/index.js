import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

// console.log(d);
console.log(day);

app.get("/",(req,res)=>{
    res.render("index.ejs")
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});