const router = require("express").Router()
const UserController = require("../controllers/UserController");

const {register, login} = UserController
router.post('/register', register);
router.post('/login', login)

module.exports = router;