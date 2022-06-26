const sequelize = require('../config/connections');

const seedTrainer = require('./trainerData');

const seedClient = require('./clientData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedTrainer();
  console.log('\n----- TRAINERS SEEDED -----\n');

  
  await seedClient();
  console.log('\n----- CLIENTS SEEDED -----\n');


  process.exit(0);
};

seedAll();
