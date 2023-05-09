const express = require("express");
const ErrorHandler = require("./utils/ErrroHandler");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}


//import Routes
const user =require('./controller/userController')

app.use("/api/v2/user",user)




// it's for ErrorHandling
app.use(ErrorHandler);
module.exports = app;
