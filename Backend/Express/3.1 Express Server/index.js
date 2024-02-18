// const express = require('express'); //syntax 1
import express from 'express';  //syntax 2 -->  both are valid
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})