
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(require('./config/config.json').development);
const models = require('./models');

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await models.User.sync();
    await models.Category.sync();
    await models.Expense.sync();
    await models.PaymentMethod.sync();
    await models.Budget.sync();

    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

syncDatabase();
