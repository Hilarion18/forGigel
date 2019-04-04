var express = require('express');
var router = express.Router();
var {findAll, login, register, userProfile, update} = require('../controllers/userControllers')
var isLogin = require('../middleware/isLogin')
// var isUser = require('../middleware/isUser')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', findAll)
router.get('/profile', isLogin, userProfile)
router.post('/register', register)
router.post('/login', login)
router.put('/', isLogin, update)

module.exports = router;
