const express = require('express');
const router = express.Router();
const {  } = require("../controller/user.controller");

router.post("/single", login);
router.post("/multiple", register);

module.exports = router
