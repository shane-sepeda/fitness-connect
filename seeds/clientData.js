const { STRING } = require('sequelize');
const { Client } = require('../models');


const clientdata = [
    {
        first_name: 'Sammy',
        last_name: 'Travis',
        birth_date: '1999-05-12',
        address: '123 valley west',
        phone_no: '1234567890',
        username: 'sammy',
        password: 'asdf',
        interest: 'fitness',
        trainer_id: 1
    }
    // {
    //     first_name: 'Charles',
    //     last_name: 'Wade',
    //     birth_date: '1999-05-12',
    //     address: '123 valley west',
    //     phone_no: '1234567890',
    //     username: 'charles',
    //     password: STRING,
    //     interest: 'fitness',
    //     trainer_id: 12
    // },
    // {
    //     first_name: 'Thomas',
    //     last_name: 'Darwin',
    //     birth_date: '1999-05-12',
    //     address: '123 austin rd',
    //     phone_no: '1234567890',
    //     username: 'thomas',
    //     password: STRING,
    //     interest: 'fitness',
    //     trainer_id: 13
    // },
    // {
    //     first_name: 'Abraham',
    //     last_name: 'Bohannon',
    //     birth_date: '1999-05-12',
    //     address: '456 lake ct',
    //     phone_no: '1234567890',
    //     username: 'abraham',
    //     password: STRING,
    //     interest: 'swimming',
    //     trainer_id: 14
    // },
    // {
    //     first_name: 'Oscar',
    //     last_name: 'Wild',
    //     birth_date: '1999-05-12',
    //     address: '789 tide river',
    //     phone_no: '1234567890',
    //     username: 'oscar',
    //     password: STRING,
    //     interest: 'running',
    //     trainer_id: 15
    // },
    // {
    //     first_name: 'Jonas',
    //     last_name: 'Austin',
    //     birth_date: '1999-05-12',
    //     address: '654 lady bird',
    //     phone_no: '1234567890',
    //     username: 'jonas',
    //     password: STRING,
    //     interest: 'yoga',
    //     trainer_id: 17
    // }
];

const seedClient = () => Client.bulkCreate(clientdata);

module.exports = seedClient;