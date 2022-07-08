//const { STRING } = require('sequelize');
const { Client } = require("../models");

const clientdata = [
  {
    first_name: "Sammy",
    last_name: "Travis",
    birth_date: "1999-05-12",
    address: "123 valley west",
    phone_no: "1234567890",
    username: "sammy",
    password: "asdf",
    interest: "fitness",
    trainer_id: 1,
  },
  {
    first_name: "Charles",
    last_name: "Wade",
    birth_date: "1999-05-12",
    address: "123 valley west",
    phone_no: "1234567890",
    username: "charles",
    password: "some",
    interest: "fitness",
    trainer_id: 3,
  },
  {
    first_name: "Thomas",
    last_name: "Darwin",
    birth_date: "1999-05-12",
    address: "123 austin rd",
    phone_no: "1234567890",
    username: "thomas",
    password: "many",
    interest: "fitness",
    trainer_id: 4,
  },
  {
    first_name: "Abraham",
    last_name: "Bohannon",
    birth_date: "1999-05-12",
    address: "456 lake ct",
    phone_no: "1234567890",
    username: "abraham",
    password: "whatis",
    interest: "swimming",
    trainer_id: 5,
  },
  {
    first_name: "Oscar",
    last_name: "Wild",
    birth_date: "1999-05-12",
    address: "789 tide river",
    phone_no: "1234567890",
    username: "oscar",
    password: "note",
    interest: "running",
    trainer_id: 6,
  },
  {
    first_name: "Jonas",
    last_name: "Austin",
    birth_date: "1999-05-12",
    address: "654 lady bird",
    phone_no: "1234567890",
    username: "jonas",
    password: "done",
    interest: "yoga",
    trainer_id: 7,
  },
];

const seedClient = () =>
  Client.bulkCreate(clientdata, { individualHooks: true });

module.exports = seedClient;
