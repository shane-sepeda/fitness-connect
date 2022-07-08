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
    .then((dbTrainerData) => {
      console.log(dbTrainerData);
      res.json(dbTrainerData);
    })
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
      // {
      //   model: Trainer,
      //   attributes: ["id", "first_name", "last_name", "username", "skills"],
      // },
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
      dbTrainerData = dbTrainerData.get({ plain: true });
      console.log(dbTrainerData);
      res.render("trainer", {
        dbTrainerData,
        loggedIn: req.session.loggedIn,
        f_name: req.session.first_name,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Trainer.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((dbTrainerData) => {
      req.session.save(() => {
        req.session.trainer_id = dbTrainerData.id;
        req.session.username = dbTrainerData.username;
        req.session.loggedIn = true;

        res.json(dbTrainerData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login-route
router.post("/login", (req, res) => {
  Trainer.findOne({
    where: {
      username: req.body.username,
      //password: req.body.password
    },
  }).then((dbTrainerData) => {
    if (!dbTrainerData) {
      res.status(400).json({ message: "No trainer with that username!" });
      return;
    }

    const validPassword = dbTrainerData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      (req.session.loggedIn = true),
        (req.session.first_name = dbTrainerData.dataValues.first_name);

      res.json({ trainer: dbTrainerData, message: "Welcome trainer!" });
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
  Trainer.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
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

router.delete("/:id", (req, res) => {
  Trainer.destroy({
    where: {
      id: req.params.id,
    },
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

module.exports = router;
