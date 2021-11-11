const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}, {timestamps: {createdAt: "created_at"}});

module.exports = mongoose.model('users', UsersSchema);