//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import  express  from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url"; 

const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(__dirname);

const app = express();
const port = 3000;
var key = "ILoveProgramming";
var value = "";

app.use(bodyParser.urlencoded({extended:true}));

function validator(req,res,next){
    console.log(req.body["password"]);
    value = req.body["password"];
    next();
}

app.use(validator);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res)=>{
    if(key===value){
        res.sendFile(__dirname+"/public/secret.html");
    } else {
        res.sendFile(__dirname+"/public/index.html");
    }
})

app.listen(port,()=>{
    console.log(`Listening on port no ${port}`);
})