const { User } = require('./../database/models');

module.exports = {

    async index(request, response) {
        const user = await User.findAll();

        return response.json(user);
    },

    async create(request, response) {
        const user = await User.create(request.body);

        return response.json(user);
    },
};