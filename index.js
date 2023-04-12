const express = require('express');
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect")
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const authRouter = require('./routes/authRoutes');



const app = express();


app.use(bodyParser.json());

app.use("/api/empl",authRouter);


app.listen(PORT,()=>{
    console.log("Server is Start");

})