const express = require('express')
const { registerUser, loginUser } = require('../controller/authCtrl')
const { linkPost, getlinks, deletePost } = require('../controller/linkCtrl')

const route = express.Router()


route.post('/post', linkPost)
route.get('/get', getlinks)
route.delete('/post/:id', deletePost)


module.exports = route