import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: 'First name is required'
    },
    email: {
        type: String,
        required: 'An email is required'
    },
    reason: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: 'A message is required'
    }
});

export default mongoose.model('Contact', ContactSchema)