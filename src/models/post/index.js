const mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate-v2'),
    Schema = mongoose.Schema;

const PostsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
    comments: [{
        ref: 'comments',
        type: Schema.Types.ObjectId,
    }]
}, {timestamps: {createdAt: "created_at"}});

PostsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('posts', PostsSchema);