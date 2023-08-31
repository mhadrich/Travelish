const config = require('../config/config.json');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(config.development);

const AdminModel = require("./admin")(sequelize, DataTypes);
const BussinessModel = require('./bussiness')(sequelize, DataTypes);
const ReviewModel = require("./review")(sequelize, DataTypes);

const db = {};

db.Admin = AdminModel;
db.Bussiness = BussinessModel;
db.Review = ReviewModel;

sequelize.sync()
  .then(() => {
    console.log('Database synced.');
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });

module.exports = db;
