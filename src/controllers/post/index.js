const { PostService } = require('../../services');
module.exports = {
    get: async (req, res, next) => {
        return res.status(200).json(await PostService.get({...req.query}));
    },
    show: async (req, res, next) => {
        return res.status(200).json(await PostService.show(req.params.id));
    },
    create: async (req, res, next) => {
        return res.status(200).json(await PostService.create({...req.body}));
    },
    delete: async (req, res, next) => {
        return res.status(200).json(await PostService.delete(req.params.id));
    },
}