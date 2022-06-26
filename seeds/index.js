const sequelize = require('../config/connections');
const seedClient = require('./clientData');
const seedTrainer = require('./trainerData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedClient();

  await seedTrainer();

  process.exit(0);
};

seedAll();
