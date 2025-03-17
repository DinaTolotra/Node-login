const express = require("express");
const passport = require("passport");
const {Strategy} = require("passport-local");
const {User} = require("../models");

const route = express.Router();

passport.use(new Strategy((username, password, done) => {
    User.findByPk(username)
    .then((user) => {
        if (user && user.password == password)
            return done(null, {name: user.name, passwd: user.password});
        else
            return done(null, false);
    })
}));

passport.serializeUser((user, done) => {
    process.nextTick(() => {
        done(null, user.name);
    });
});

passport.deserializeUser((username, done) => {
    process.nextTick(() => {
        User.findByPk(username)
        .then((user) => {
            done(null, user);
        })
    });
});

route.use(passport.initialize());
route.use(passport.session());

route.post("/login/auth", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
}));


module.exports = route;
