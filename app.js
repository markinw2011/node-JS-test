const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const app = express();
const port = 3000;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))

app.get("/",(req,res)=>{
    
    res.send("hi");
})

app.listen(port,()=>{
    debug("listening on port" + chalk.green(" : "+port));
})