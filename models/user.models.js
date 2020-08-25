import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name: {
        type:  String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, "Email must be valid"]
    },
    password: {
        type: String,
        required: ['Password is required'],
        minlength: 8,
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function(next) {
    const user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        user.password = hash;
        next();
        });
    });
    
});

UserSchema.methods.comparePassword = function(plainTextPassword, next) {
    bcrypt.compare(plainTextPassword, this.password, function(err, isMatch) {
        if (err) {
            return next(err);
        } 
        next(null, isMatch);
    });
};

export default mongoose.model('User', UserSchema)