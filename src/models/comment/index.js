const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    comment: {
        type: String,
    },
    from: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
    post: {
        ref: 'posts',
        type: Schema.Types.ObjectId,
    },
},
{
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

module.exports = mongoose.model('comments', CommentsSchema);
