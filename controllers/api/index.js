const router = require('express').Router();

const trainerRoutes = require('./trainer-routes.js');
const clientRoutes = require('./client-routes');


router.use('/trainer', trainerRoutes);
router.use('/client', clientRoutes);


module.exports = router;