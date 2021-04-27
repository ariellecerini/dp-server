const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/userDispatch', UserCtrl.createUserDispatch)


module.exports = router
