const mongoose = require('mongoose')

const linksSchema = new mongoose.Schema({

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

module.exports = mongoose.model('Linklink', linksSchema)