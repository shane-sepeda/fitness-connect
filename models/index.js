const Client = require('./Client');
const Trainer = require('./Trainer');


//Trainer have many Client
Trainer.hasMany(Client, {
    foreignKey: 'trainer_id'
});
    //Client belongs to a Trainer
Client.belongsTo(Trainer, {
    foreignKey: 'trainer_id'

});

module.exports = { Client, Trainer};