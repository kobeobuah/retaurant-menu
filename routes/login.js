const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login') 
// const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', loginController.getLogin)
router.get('/new-acct', loginController.getSignup)
router.get('/logout', loginController.getLogout)
router.post('/', function (res,req) {loginController.postLogin})
router.post('/new', function (res,req) {loginController.postSignup})

module.exports = router;