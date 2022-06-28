const router = require('express').Router();
const { Trainer, Client } = require('../../models');
const withAuth = require('../../utils/auth.js');

//get all trainers
router.get('/', withAuth, (req, res) => {
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