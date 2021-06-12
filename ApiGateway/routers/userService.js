var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
//const isAuthorized = require('../controller/requestAuthenticator')
const verifyUser = require("../Config/middleware/verifyUser.js");

const BASE_URL = 'http://localhost:7700'
const api = apiAdapter(BASE_URL)

router.post('/api/user/login', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.post('/api/user/signup', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.post('/api/user/otp', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.post('/api/user/resendOTP', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.post('/api/user/forgotpw', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})


module.exports = router