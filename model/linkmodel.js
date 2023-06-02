const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({

    poto: {
        type: String,
    },

    link: {
        type: String,
    },
    title: {
        type: String,
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Link', linkSchema)
