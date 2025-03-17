const {secret} = require("../config");

const session = require("express-session");
const express = require("express");

const route = express.Router();

route.use(session({
    secret: secret,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

module.exports = route;
