const { UserService } = require('../../services');
module.exports = {
    get: async (req, res, next) => {
        return res.status(200).json(await UserService.get());
    },
    show: async (req, res, next) => {
        return res.status(200).json(await UserService.show());
    },
    create: async (req, res, next) => {
        return res.status(200).json(await UserService.create({...req.body}));
    },
}