const express = require('express')
const { createPost, editPost, deletePost, getPost, singlePost, linkPost, getlinks } = require('../controller/postCtrl')

const route = express.Router()

route.get('/', getPost)
route.get('/:id', singlePost)
route.post('/create', createPost)
route.put('/edit/:id', editPost)
route.delete('/delete/:id', deletePost)
route.post('/post', linkPost)
route.get('/link', getlinks)

module.exports = route