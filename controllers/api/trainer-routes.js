const router = require('express').Router();
const sequelize = require('../../config/connections');
const { Trainer, Client } = require('../../models');


//get all trainers
router.get('/', (req, res) => {
    console.log('======================');
    Trainer.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbTrainerData => res.json(dbTrainerData))
     .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
 

//get clients by id 



module.exports = router;