const router = require("express").Router();
const { Client, Trainer } = require("../models");

const withAuth = require("../utils/auth");
// router.get('/', (req,res) => {

//     // if (req.session.logged) {
//     //     res.render('dashboard', {
//     //         logged: req.session.logged
//     //     })
//     //     return;
//     // };
//     res.render('dashboard')
//   });

//get all clients
router.get("/", withAuth, (req, res) => {
  console.log(
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  );
  Client.findAll({
    attributes: [
      "first_name",
      "last_name",
      "birth_date",
      "address",
      "phone_no",
      "username",
      "interest",
      "trainer_id",
    ],
  })
    .then((dbClientData) => {
      const clients = dbClientData.map((client) => client.get({ plain: true }));
      console.log(clients);
      res.render("dashboard", {
        clients,
        loggedIn: req.session.loggedIn,
        f_name: req.session.first_name,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
