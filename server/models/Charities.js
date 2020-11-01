const { Schema } = require('mongoose');

const charitySchema = new Schema({
    name: [
        {
            type: String,
        },
    ],
    category: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    mission: {
        type: String,
    },
});

module.exports = charitySchema;