const { Trainer } = require('../models');

const trainerdata = [
    {
        id: 1,
        first_name: 'Sam',
        last_name: 'Tuttle',
        username: 'st',
        password: 'aaaa',
        skills: 'fitness',
    
    },
    {
        id: 2,
        first_name: 'Victoria',
        last_name: 'Secret',
        username: 'vs',
        password: 'bbbb',
        skills: 'Yoga',
        
    },

    {
        id: 3,
        first_name: 'Max',
        last_name: 'Headroom',
        username: 'mh',
        password: '',
        skills: 'Swimming',
       
    },
    {
        id: 4,
        first_name: 'Mr',
        last_name: 'Bean',
        username: 'mb',
        password: 'cccc',
        skills: 'mental wellness',
       
    },
    {
        id: 5,
        first_name: 'David',
        last_name: 'Robinson',
        username: 'dr',
        password: 'dddd',
        skills: 'Boxing',
        
    },
    {
        id: 6,
        first_name: 'James',
        last_name: 'Franco',
        username: 'jf',
        password: 'eeee',
        skills: 'running',
        
    },
    {
        id: 7,
        first_name: 'Dean',
        last_name: 'Martin',
        username: 'dm',
        password: 'ffff',
        skills: 'Dancing',
        
    },
    {
        id: 8,
        first_name: 'Billie',
        last_name: 'Eilish',
        username: 'be',
        password: 'gggg',
        skills: 'fitness',
        
    },
    {
        id: 9,
        first_name: 'Paris',
        last_name: 'Hilton',
        username: 'ph',
        password: 'hhhh',
        skills: 'fitness',
        
    }
];

const seedTrainer = () => Trainer.bulkCreate(trainerdata);

module.exports = seedTrainer;