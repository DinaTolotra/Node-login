const {dbUri} = require("../config");
const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(dbUri);
const User = require("./user")(sequelize);

User.sync({alter: true});

module.exports = {
    User
}

