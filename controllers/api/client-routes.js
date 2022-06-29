const router = require('express').Router();
const { Client } = require('../../models');


//get all clients
router.get('/', (req, res) => {
    console.log('======================');
    Client.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbClientData => res.json(dbClientData))
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
 

//get clients by id 



module.exports = router;