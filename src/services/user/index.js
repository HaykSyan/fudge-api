const { User } = require('../../models');

module.exports = {
    get: async () => {
        return await User.find({}, null, {sort: {created_at: -1}, limit: 6});
    },
    show: async () => {
        let user = await User.findOne({});
        if(!user) user = await User.create({name: "Don Corleone", status: 'Online'});
        return user;
    },
    create: async (data) => {
        return await User.create({...data});
    },
}