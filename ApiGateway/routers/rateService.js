var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const verifyUser = require("../Config/middleware/verifyUser.js");

const BASE_URL = 'http://localhost:3300'
const api = apiAdapter(BASE_URL)

router.post('/api/rate', (req, res) => {
    api.post(req.path, req.body).then(resp => {
        res.send(resp.data);
    })
})



module.exports = router