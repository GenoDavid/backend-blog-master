const linksModel = require("../model/linksModel")
const asyncHandeler = require('express-async-handler')


const linkPost = asyncHandeler(async (req, res) => {
    try {
        const newPost = await linksModel.create(req.body)

        res.status(200).json(newPost)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
// link get
const getlinks = asyncHandeler(async (req, res) => {

    const title = req.query.user
    const search = req.query.search
    try {
        let posts;
        if (title) {
            posts = await linksModel.find({ title })
        }
        else if (search) { posts = await linksModel.find({ title: search }) }
        else {
            posts = await linksModel.find()
        }
        // const post = await linksModel.find()
        // console.log(post);
        res.status(200).json(posts)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
const deletePost = asyncHandeler(async (req, res) => {
    try {
        const posts = await linksModel.findByIdAndRemove(req.params.id)
        res.status(200).json(posts)


    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})
module.exports = {
    linkPost,
    getlinks,
    deletePost,
}