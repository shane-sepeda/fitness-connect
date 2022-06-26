const {Trainer} = require('../models');

const trainerData = [
    {
        first_name: 'Sam',
        last_name: 'Tuttle',
        username: 'st',
        password: '',
        skills: 'fitness',
        client_id: '1'
    },
    {
        first_name: 'Victoria',
        last_name: 'Secret',
        username: 'vs',
        password: '',
        skills: 'Yoga',
        client_id: '1'
    },

    {
        first_name: 'Max',
        last_name: 'Headroom',
        username: 'mh',
        password: '',
        skills: 'Swimming',
        client_id: '1'
    },
    {
        first_name: 'Mr',
        last_name: 'Bean',
        username: 'mb',
        password: '',
        skills: 'mental wellness',
        client_id: '1'
    },
    {
        first_name: 'David',
        last_name: 'Robinson',
        username: 'dr',
        password: '',
        skills: 'Boxing',
        client_id: '1'
    },
    {
        first_name: 'James',
        last_name: 'Franco',
        username: 'jf',
        password: '',
        skills: 'running',
        client_id: '1'
    },
    {
        first_name: 'Dean',
        last_name: 'Martin',
        username: 'dm',
        password: '',
        skills: '',
        client_id: '1'
    },
    {
        first_name: 'Billie',
        last_name: 'Eilish',
        username: 'be',
        password: '',
        skills: 'fitness',
        client_id: '1'
    },
    {
        first_name: 'Paris',
        last_name: 'Hilton',
        username: 'ph',
        password: '',
        skills: 'fitness',
        client_id: '1'
    }
];

const seedTrainer = () => Trainer.bulkCreate(trainerData);

module.exports = seedTrainer;