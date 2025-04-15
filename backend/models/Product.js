import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    sizes: {
        type: [String], 
        default: [] 
    },
    reviews: {
        type: [String],
        default: []
    },
    images: {
        type: [String],
        default: []
    }

})

export default mongoose.model('product', ProductSchema)