import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    photos: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    parks: {
        type: String
    },
    checkIn: {
        type: String
    },
    checkOut: {
        type: String
    },
    maxGuests: {
        type: Number
    },
    price: {
        type: Number
    },
    status: {
        type: String,
        default: "available"
    }
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;