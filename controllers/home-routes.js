const { Client, Trainer } = require("../models");
const router = require("express").Router();



// render homepage
router.get('/',  (req,res) => {
    
  if (req.session.loggedIn) {
      res.render('dashboard', {
          loggedIn: req.session.loggedIn
      })
      return;
  };
  res.render('homepage')
});

//get a client by id
router.get("/client/:id", (req, res) => {
  Client.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "first_name",
      "last_name",
      "birth_date",
      "address",
      "phone_no",
      "username",
      "interest",
      "trainer_id",
    ],
    include: [
      {
        model: Trainer,
        attributes: ["username"],
      },
    ],
  })

    .then((dbClientData) => {
      if (!dbClientData) {
        res.status(404).json({ message: "No client found with this id" });
        return;
      }
      const client = dbClientData.get({ plain: true });
      console.log(client);
      res.render("single-client", { client, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});




module.exports = router;
