const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const app = express();
const PORT = process.env.PORT || 4000;
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))

app.set("views","./src/views");
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    
    res.render("index",{username: 'what555+', customers:["jack","ben","wolf"]}); 
})

app.listen(PORT,()=>{
    debug("listening on port" + chalk.green(" : "+PORT));
})