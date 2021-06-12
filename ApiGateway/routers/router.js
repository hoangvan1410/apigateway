var express = require('express');
var router = express.Router()
var healthInfoRouter = require('./healthInfoService')
var userRouter = require('./userService')
var rateRouter = require('./rateService')
router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(healthInfoRouter)
router.use(userRouter)
router.use(rateRouter)
module.exports = router