const express = require( 'express' );
const UserController = require('./controllers/UserController');
const router = express.Router()

const userController = new UserController()
router.post('/', userController.addUser)

module.exports = router