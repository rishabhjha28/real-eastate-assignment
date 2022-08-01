const mongoose = require('mongoose');

const estateSchema = new mongoose.Schema({
    houseName: {
        type: String,
        required: [true, 'why no houseName']
    },
    houseAddress: {
        type: String,
        required: true
    },
    houseRent: {
        type: Number,
        required: true
    },
    houseLength: {
        type: Number,
        required: true
    },
    houseBreadth: {
        type: Number,
        required: true
    },
    noOfBedRoom: {
        type: Number,
        required: true
    },
    noOfBathroom: {
        type: Number,
        required: true
    },
    imgLink: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean,
        default: false
    },
    estateType: {
        type: String,
        default: "Residential"
    }
})

const estateData = mongoose.model('ESTATE', estateSchema);

module.exports = estateData;