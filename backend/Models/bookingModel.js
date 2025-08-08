import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Place'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    checkIn: {
        type: Data,
        required: true
    },
    checkOut: {
        type: Data,
        required: true
    }
})

export const bookingModel = mongoose.model("Booking", bookingSchema);