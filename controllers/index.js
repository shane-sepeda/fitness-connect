const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashRoutes = require("./dashboard-routes");
// const trainerRoutes = require("../trainer-routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashRoutes);
// router.use("/trainer", trainerRoutes);

module.exports = router;
