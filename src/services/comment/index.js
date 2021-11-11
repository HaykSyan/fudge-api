const { Comment, Post } = require('../../models');
const comment = require('../../models/comment');

module.exports = {
    get: async () => {
        return await Comment.find({}, null, {sort: {created_at: -1}, limit: 4}).populate('from');
    },
    create: async (data) => {
        const _comment = await Comment.create({...data});
        await Post.updateOne({_id: data.post}, {$push: {comments: _comment._id}}, {new: true});
        await _comment.populate('from');
        return _comment;
    }
}