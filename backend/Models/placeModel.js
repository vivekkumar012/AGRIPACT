import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String
    },
    address: {
        type: String
    },
    photos: {
        type: String
    },
    description: {
        type: String
    },
    perks: {
        type: String
    },
    extrsInfo: {
        type: String
    },
    checkIn: {
        type: Number
    },
    checkOut: {
        type: Number
    },
    maxGuests: {
        type: Number
    },
    price: {
        type: Number
    }
})

export const placeModel = mongoose.model("Place", placeSchema);