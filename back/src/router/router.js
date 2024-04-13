const express = require("express");

const router = express.Router();

const controllerAuth = require("../controllers/auth.controller");
const controllerUsers = require("../controllers/users.controller");

router.post("/auth/singIn", controllerAuth.singIn);


router.post("/users/getByFIO", controllerUsers.getUsers);

router.post("/users/changeStatus", controllerUsers.changeStatus);


module.exports = router;