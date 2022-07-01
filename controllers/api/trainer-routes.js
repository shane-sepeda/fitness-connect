const router = require("express").Router();
const { Trainer, Client } = require("../../models");
//const withAuth = require("../../utils/auth.js");

//get all trainers excluded withAuth(middleware) for test
//router.get("/"), withAuth, (req, res)....
router.get("/", (req, res) => {
  console.log("======================");
  Trainer.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbTrainerData) => res.json(dbTrainerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get trainer by id

router.get("/:id", (req, res) => {
  Trainer.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Client,
        attributes: ["id", "first_name", "last_name", "username", "interest"],
      },
      {
        model: Client,
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
      },
      
    ],
  })
    .then((dbTrainerData) => {
      if (!dbTrainerData) {
        res.status(404).json({ message: "No trainer found with this id" });
        return;
      }
      res.json(dbTrainerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    where: {
      username: req.body.username,
      password: req.body.password
    },
  }).then((dbTrainerData) => {
    req.session.save(() => {
      req.session.user_id = dbTrainerData.id;
      req.session.username = dbTrainerData.username;
      req.session.loggedIn = true;

      res.json(dbTrainerData);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
