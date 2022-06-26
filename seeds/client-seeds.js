const {CLient} = require('../models');
const Client = require('../models/Client');

const clientData = [
    {
        first_name: 'Sammy',
        last_name: 'Travis',
        birth_date: '1999-05-12',
        address: '123 valley west',
        phone_no: '1234567890',
        user_name: 'sammy',
        password: '',
        interest: 'fitness',
        client_id: '1'
    },
    {
        first_name: 'Charles',
        last_name: 'Wade',
        birth_date: '1999-05-12',
        address: '123 valley west',
        phone_no: '1234567890',
        user_name: 'charles',
        password: '',
        interest: 'fitness',
        client_id: '1'
    },
    {
        first_name: 'Thomas',
        last_name: 'Darwin',
        birth_date: '1999-05-12',
        address: '123 austin rd',
        phone_no: '1234567890',
        user_name: 'thomas',
        password: '',
        interest: 'fitness',
        client_id: '1'
    },
    {
        first_name: 'Abraham',
        last_name: 'Bohannon',
        birth_date: '1999-05-12',
        address: '456 lake ct',
        phone_no: '1234567890',
        user_name: 'abraham',
        password: '',
        interest: 'swimming',
        client_id: '1'
    },
    {
        first_name: 'Oscar',
        last_name: 'Wild',
        birth_date: '1999-05-12',
        address: '789 tide river',
        phone_no: '1234567890',
        user_name: 'oscar',
        password: '',
        interest: 'running',
        client_id: '1'
    },
    {
        first_name: 'Jonas',
        last_name: 'Austin',
        birth_date: '1999-05-12',
        address: '654 lady bird',
        phone_no: '1234567890',
        user_name: 'jonas',
        password: '',
        interest: 'yoga',
        client_id: '1'
    }
];

const seedClient = () => Client.bulkCreate(clientData);

module.exports = seedClient;