require('dotenv').config()

const express = require("express");

const app = express();
const port = 4000;

//req = request that we'll  get and res (response that we'll send)
app.get("/available" ,(req,res)=>{
  res.send("/ /twitter /login /youtube")
})
app.get("/", (req, res) => {
  res.send("Hello world from express!");
});

app.get("/twitter", (req, res) => {
  res.send(`twitter handle is "satyagya"`);
});

app.get("/login",(req,res)=>{
  res.send('please login to the website');
})

app.get("/youtube" , (req,res)=>{
  res.send("<h1>this is your youtube homepage</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}`);
});
