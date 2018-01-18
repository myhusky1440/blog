/**
 * Created by Administrator on 2018/1/18 0018.
 */
const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出
router.get('/', checkLogin, function (req, res, next) {
  res.send('登出')
})

module.exports = router
