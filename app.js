require('dotenv').config();
const express = require("express");
const database = require("./database")
const { register } = require('./controllers/auth/register');
const { login } = require('./controllers/auth/login');
const { temp } = require('./controllers/temp');
const { amount } = require('./controllers/amount');
const { group } = require('./controllers/group');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());

app.use(express.urlencoded({extended: true}));

const start = async () => {
    await database.connect();

    app.get("/", function(req, res){
        res.send("Hello World");
    })
    // app.get("/login", temp);
    app.get("/register", temp);
    app.get("/group", group);

    app.post("/register", register);
    app.post("/payment", amount);

    app.post("/login", login);

    app.listen(3000, function(){
        console.log("server started on port 3000")
    })
}

start();