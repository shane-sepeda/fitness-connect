const User = require('./Client');
const Gallery = require('./Trainer');

Trainer.hasMany(Client, {
  foreignKey: 'client_id',
});

Client.belongsTo(Trainer, {
  foreignKey: 'client_id',
});



module.exports = { Client, Trainer };