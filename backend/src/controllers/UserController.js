const { User } = require('./../database/models');

module.exports = {

    async findAll(request, response) {
        const user = await User.findAll()
            .catch((error) => {
                return response.status(404).send(error);
            });

        return response.status(200).json(user);
    },

    async create(request, response) {
        const user = await User.create(request.body)
            .catch((error) => {
                return response.status(400).send(error);
            });

        return response.json(user);
    },
};