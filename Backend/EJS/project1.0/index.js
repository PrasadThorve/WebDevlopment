import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

// console.log(d);
console.log(day);

let type = " a weekday";
let action = "work hard!";

if(day==0 || day==6 ){
    type = "a weekend";
    action = "have fun!";
}

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        daytype : type, // weekday
        activity : action, //work hard
    })

});

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});