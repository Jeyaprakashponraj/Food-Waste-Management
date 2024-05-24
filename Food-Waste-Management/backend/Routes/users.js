const express = require('express');
const { signup,activate,signin,donate,showUsers} = require('../Controllers/auth-controller');
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.post('/signup', signup);
router.get('/activate/:activationCode', activate);
router.post('/signin',signin)
router.post('/donate',donate)
router.get('/userShow', showUsers);

module.exports = router;
