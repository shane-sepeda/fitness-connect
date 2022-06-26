const sequelize = require('../config/connections');
const seedClient = require('./client-seeds');
const seedTrainer = require('./trainer-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedClient();

  await seedTrainer();

  process.exit(0);
};

seedAll();
