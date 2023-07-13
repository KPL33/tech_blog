const Sequelize = require("sequelize");

//Here, we "require" the private user's log-in credentials, which have been added to our "../(dot)env" file
require("dotenv").config();

//Here, we use a "ternary operator" to check the "env"ironment in which we're running our app: If we are running the app in Heroku's "env"ironment ("JAWSDB_URL"; which, WE ARE), we create a new "sequelize" instance conected to Heroku's database. The sippet following ":" declares that if we are NOT going to run the app using Heroku's database, we'll utilize our own, local database.
let sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );

//We "export" this "connection", so it can be imported into our "../server.js" file.
module.exports = sequelize;
