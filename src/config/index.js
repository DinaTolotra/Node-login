const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
dotenv.config();

module.exports = {
    cors: cors(),
    port: process.env.PORT || 8000,
    addr: process.env.ADDRESS || 'localhost',
    secret: process.env.SESSION_SECRET,

    dbUri: process.env.DB+"://"+process.env.USERNAME+":"+process.env.PASSWORD+"@"+process.env.DB_HOST+":"+process.env.DB_PORT+"/"+process.env.DB_NAME,

    publicDir: path.join(__dirname, "/../public"),
}
