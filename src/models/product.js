'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: string,
        required: true,
        trim: true
    },
    slug: {
        type: string,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: string,
        required: true,
        trim: true
    },
    price: {
        type: number,
        required: true
    },
    active: {
        type: boolean,
        required: true,
        default: true
    },
    tags: [{
        type: string,
        required: true
    }]
});

module.exports = mongoose.model('Product', schema);