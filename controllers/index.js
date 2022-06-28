// const Client = require('./Client');
// const Trainer = require('./Trainer');

// Trainer.hasMany(Client, {
//   foreignKey: 'client_id',
// });

// Client.belongsTo(Trainer, {
//   foreignKey: 'client_id',
// });



// module.exports = { Client, Trainer };

const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
