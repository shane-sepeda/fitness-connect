const Client = require('./Client');
const Trainer = require('./Trainer');

//Client belongs to a Trainer
Client.belongsTo(Trainer, {
    foreignKey: 'trainer_id'
});

//Trainer have many Client
Trainer.hasMany(Client, {
    foreignKey: 'client_id'
});

module.exports = { Client, Trainer};