const  express = require('express');

const router = express.Router();
const user = require('../controller/userController');
router.get('/login', user.userLogin);
router.post('/createuser', user.createUser);

module.exports = router;