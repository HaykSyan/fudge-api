const { CommentService } = require('../../services');
module.exports = {
    get: async (req, res, next) => {
        return res.status(200).json(await CommentService.get());
    },
    create: async (req, res, next) => {
        return res.status(200).json(await CommentService.create({...req.body}));
    }
}