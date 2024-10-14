const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.models")(sequelize, Sequelize);
db.project = require("./project.models")(sequelize, Sequelize);

db.user.hasMany(db.project, {
    as: "projects",
});

db.project.belongsTo(db.user, {
    as: "user",
    foreingKey: "userId",
});

module.exports = db;
