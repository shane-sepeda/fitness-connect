const { Trainer, Client } = require('../models');

const trainerdata = [
    {
        first_name: 'Sam',
        last_name: 'Tuttle',
        username: 'st',
        password: 'aaaa',
        skills: 'fitness'
    
    },
    {
        first_name: 'Victoria',
        last_name: 'Secret',
        username: 'vs',
        password: 'bbbb',
        skills: 'Yoga'
        
    },

    {
        first_name: 'Max',
        last_name: 'Headroom',
        username: 'mh',
        password: 'ssss',
        skills: 'Swimming'
       
    },
    {
        first_name: 'Mr',
        last_name: 'Bean',
        username: 'mb',
        password: 'cccc',
        skills: 'mental wellness'
       
    },
    {
        first_name: 'David',
        last_name: 'Robinson',
        username: 'dr',
        password: 'dddd',
        skills: 'Boxing'
        
    },
    {
        first_name: 'James',
        last_name: 'Franco',
        username: 'jf',
        password: 'eeee',
        skills: 'running'
        
    },
    {
        first_name: 'Dean',
        last_name: 'Martin',
        username: 'dm',
        password: 'ffff',
        skills: 'Dancing',
        
    },
    {
        first_name: 'Billie',
        last_name: 'Eilish',
        username: 'be',
        password: 'gggg',
        skills: 'fitness'
        
    },
    {
        first_name: 'Paris',
        last_name: 'Hilton',
        username: 'ph',
        password: 'hhhh',
        skills: 'fitness'
        
    }
];

const seedTrainer = () => Trainer.bulkCreate(trainerdata, {individualHooks: true});

module.exports = seedTrainer;