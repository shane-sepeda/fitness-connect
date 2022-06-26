const { Trainer } = require('../models');

const trainerdata = [
    {
        first_name: 'Sam',
        last_name: 'Tuttle',
        username: 'st',
        password: '',
        skills: 'fitness',
    
    },
    {
        first_name: 'Victoria',
        last_name: 'Secret',
        username: 'vs',
        password: '',
        skills: 'Yoga',
        
    },

    {
        first_name: 'Max',
        last_name: 'Headroom',
        username: 'mh',
        password: '',
        skills: 'Swimming',
       
    },
    {
        first_name: 'Mr',
        last_name: 'Bean',
        username: 'mb',
        password: '',
        skills: 'mental wellness',
       
    },
    {
        first_name: 'David',
        last_name: 'Robinson',
        username: 'dr',
        password: '',
        skills: 'Boxing',
        
    },
    {
        first_name: 'James',
        last_name: 'Franco',
        username: 'jf',
        password: '',
        skills: 'running',
        
    },
    {
        first_name: 'Dean',
        last_name: 'Martin',
        username: 'dm',
        password: '',
        skills: 'Dancing',
        
    },
    {
        first_name: 'Billie',
        last_name: 'Eilish',
        username: 'be',
        password: '',
        skills: 'fitness',
        
    },
    {
        first_name: 'Paris',
        last_name: 'Hilton',
        username: 'ph',
        password: '',
        skills: 'fitness',
        
    }
];

const seedTrainer = () => Trainer.bulkCreate(trainerdata);

module.exports = seedTrainer;