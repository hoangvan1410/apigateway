var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
//const isAuthorized = require('../controller/requestAuthenticator')
const verifyUser = require("../Config/middleware/verifyUser.js");

const BASE_URL = 'http://localhost:5500'
const api = apiAdapter(BASE_URL)

router.post('/api/healthinfo/get', (req, res) => {
  api.post(req.path,req.body).then(resp => {
    res.send(resp.data);
  })
})
router.post('/api/healthinfo/update', (req, res) => {
  api.post(req.path,req.body).then(resp => {
    res.send(resp.data);
  })
})
// router.post('/api/healthinfo/get', verifyUser, (req, res) => {
//   api.post(req.path,req.header).then(resp => {
//     res.send(resp.data)
//   })
// })

module.exports = router