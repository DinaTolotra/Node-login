const { port, addr, cors } = require("./config");
const route = require("./routes");

const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/view");

app.use(cors);
app.use(route);

app.listen(port, (err) => {
    if (err) console.log(`Error: ${err.message}`);
    else console.log(`Server listening on: ${addr}:${port}`);
})
