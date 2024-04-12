const express = require("express");

const router = express.Router();

const controllerAuth = require("../controllers/auth.controller");

router.post("/auth/singIn", controllerAuth.singIn);

module.exports = router;