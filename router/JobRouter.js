const authentication = require("../middleware/authentication");
const router = require("express").Router()
const axios = require('axios').default;

const JobController = require("../controllers/JobController");
const {getJobs, getJobById} = JobController

router.use(authentication)
router.get('/:id', getJobById)
router.get('/', getJobs);

module.exports = router;