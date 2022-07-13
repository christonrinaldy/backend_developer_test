const router = require('express').Router()
const { route } = require('./UserRouter');
const UserRoute = require('./UserRouter')
const JobRouter = require('./JobRouter')

router.use('/user',UserRoute);
router.use('/job', JobRouter)

module.exports = router