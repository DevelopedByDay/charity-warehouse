const { Schema, model } = require('mongoose');

const charitySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        mission: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Charity = model('Charity', charitySchema);

module.exports = Charity;