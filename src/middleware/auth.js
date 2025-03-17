const express = require("express");
const passport = require("passport");
const {Strategy} = require("passport-local");

const route = express.Router();

passport.use(new Strategy((username, password, done) => {
    if (username.length > 0 && password.length > 0) {
        return done(null, {id: 0, name: username, passwd: password});
    } else {
        return done(null, false);
    }
}));

passport.serializeUser((user, done) => {
    process.nextTick(() => {
        done(null, user);
    });
});

passport.deserializeUser((user, done) => {
    process.nextTick(() => {
        done(null, user);
    });
});

route.use(passport.initialize());
route.use(passport.session());

route.post("/login/auth", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
}));


module.exports = route;
