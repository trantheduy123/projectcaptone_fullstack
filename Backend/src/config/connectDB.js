const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'if0_36145781_websitebooking',
  'if0_36145781',
  'cqWTAXQ5R9NkCg',
  {
    host: 'php-myadmin.net',
    dialect: 'mysql',
    logging: false,
  }
);

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectDB;
