const { Post } = require('../../models');

module.exports = {
    get: async (data) => {
        const page = data.page || 1;
        return await Post.paginate({}, {
            sort: {created_at: -1}, page, limit: 4,
            populate: [
                {path: 'user'},
            ]
        });
    },
    show: async (id) => {
        return await Post.findOne({_id: id}, null, {populate: [{
            path: 'comments',
            populate: [{path: 'from'}]
        }]});
    },
    create: async (data) => {
        return await Post.create({...data});
    },
    delete: async (id) => {
        return await Post.delete({_id: id});
    },
}