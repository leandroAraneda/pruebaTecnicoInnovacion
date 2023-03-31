const mongoose = require('mongoose');
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: {
        type: String,
        default: ''
    }
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};
userSchema.statics.comparePassword = async (password, currentPassword) => {
    const status = await bcrypt.compare(password, currentPassword);
    return status;
};

const User = mongoose.model('User', userSchema);

module.exports = User;