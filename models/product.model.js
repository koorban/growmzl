import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Product must have a name'
    },
    description: {
        type: String,
        required: 'A short description of the product is required'
    },
    category: {
        type: String,
        trim: true,
        required: 'A category is required for the product'
    },
    subCategory: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        trim: true,
        required: 'A price is required'
    },
    unit: {
        type: String,
        trim: true,
        required: 'A base selling unit is required'
    },
    quantity: {
        type: Number,
        trim: true
    },
    imageUrl: {
        type: String,
        required: true
    },
});

export default mongoose.model('Product', ProductSchema)