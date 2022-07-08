const router = require("express").Router();
const { Client } = require("../../models");

//get all clients
router.get("/", (req, res) => {
  console.log("======================");
  Client.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbClientData) => res.json(dbClientData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get clients by id
router.get("/:id", (req, res) => {
  Client.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
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
    .then((dbClientData) => {
      if (!dbClientData) {
        res.status(404).json({ message: "No client found with this id" });
        return;
      }
      dbClientData = dbClientData.get({ plain: true });
      console.log(dbClientData);
      res.render("client", {
        dbClientData,
        loggedIn: req.session.loggedIn,
        f_name: req.session.first_name,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  Client.findOne({
    where: {
      username: req.body.username,
      //password: req.body.password
    },
  }).then((dbClientData) => {
    if (!dbClientData) {
      res.status(400).json({ message: "No client with that username!" });
      return;
    }

    const validPassword = dbClientData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      (req.session.loggedIn = true),
        (req.session.first_name = dbClientData.dataValues.first_name);

      res.json({ client: dbClientData, message: "Welcome Client!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/:id", (req, res) => {
  // pass in req.body instead to only update what's passed through
  Client.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbClientData) => {
      if (!dbClientData) {
        res.status(404).json({ message: "No client found with this id" });
        return;
      }
      res.json(dbClientData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
