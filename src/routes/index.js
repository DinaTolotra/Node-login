const {publicDir} = require("../config");
const session = require("../middleware/session");
const auth = require("../middleware/auth");

const express = require("express");
const route = express.Router();

route.use(express.static(publicDir));
route.use(express.urlencoded({extended: true}));

route.use(session);
route.use(auth);

route.get("/", (req, res, next) => {
    if (req.isAuthenticated())
        res.redirect("/home");
    else
        res.render("index");
});

route.get("/login", (req, res, next) => {
    if (req.isAuthenticated())
        res.redirect("/home");
    else
        res.render("login");
});

route.get("/logout", (req, res, next) => {
    if (req.isAuthenticated())
        res.render("logout", {user: req.user});
    else
        res.redirect("/login");
});

route.post("/logout", (req, res, next) => {
    if (req.isAuthenticated()) {
        req.logOut((err) => {
            if (err) console.log(err);
        });
    }
    res.redirect("/");
});

route.get("/home", (req, res, next) => {
    if (req.isAuthenticated())
        res.render("home", {user: req.user});
    else
        res.render("home", {user: {id: 0, name: "Guest"}});
});


module.exports = route;
