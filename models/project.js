const mongoose = require('../db/connection')

const projectSchema = new mongoose.Schema(
    {
        gallery: {
            type: String,
            required: true
        },
        projectType: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        dateCreated: {
            type: String,
            required: true
        },
        dateAdded: {
            type: Date,
            default: Date.now
        },
        medium: {
            type: String,
            required: true
        },
        externalLink1: {
            type: String
        },
        externalLink2: {
            type: String
        },
        designRole1: {
            type: String,
            required: true
        },
        designRole2: {
            type: String
        },
        designRole3: {
            type: String
        },
        designRole4: {
            type: String
        },
        designRole5: {
            type: String
        },
        premise: {
            type: String,
            required: true
        },
        paragraph1: {
            type: String,
            required: true
        },
        paragraph2: {
            type: String
        },
        paragraph3: {
            type: String
        },
        paragraph4: {
            type: String
        },
        paragraph5: {
            type: String
        },
        paragraph6: {
            type: String
        },
        paragraph7: {
            type: String
        },
        paragraph8: {
            type: String
        },
        paragraph9: {
            type: String
        },
        paragraph10: {
            type: String
        },
        image1: {
            type: String,
            required: true
        },
        image2: {
            type: String
        },
        image3: {
            type: String
        },
        image4: {
            type: String
        },
        image5: {
            type: String
        },
        image6: {
            type: String
        },
        image7: {
            type: String
        },
        image8: {
            type: String
        },
        image9: {
            type: String
        },
        image10: {
            type: String
        },
        image11: {
            type: String
        },
        image12: {
            type: String
        },
        image13: {
            type: String
        },
        image14: {
            type: String
        },
        image15: {
            type: String
        },
        image16: {
            type: String
        },
        image17: {
            type: String
        },
        image18: {
            type: String
        },
        image19: {
            type: String
        },
        image20: {
            type: String
        },

    }
)

module.exports = mongoose.model('Project', projectSchema)