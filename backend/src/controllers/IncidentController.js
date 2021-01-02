const db = require('./../database/models');
const { Incident, User } = require('./../database/models');

module.exports = {

    async findAll(request, response) {
        const selector = {
            include: [{
                model: User,
                as: 'user',
                attributes: ['name', 'email']
            }]
        };

        const incident = await Incident.findAll(selector)
            .catch((error) => {
                return response.status(404).send(error);
            });

        return response.status(200).json(incident);
    },

    async find(request, response) {
        const { userId } = request.params;
        const selector = {
            include: [{
                model: User,
                as: 'user',
                attributes: ['name', 'email']
            }],
            where: {
                user_id: userId
            }
        };

        const incident = await Incident.findAll(selector)
            .catch((error) => {
                return response.status(404).send(error);
            });

        return response.status(200).json(incident);
    },

    async create(request, response) {
        const incident = await Incident.create(request.body)
            .catch((error) => {
                return response.status(400).send(error);
            });

        return response.status(201).json(incident);
    },

    async delete(request, response) {
        const { id } = request.params;
        const selector = {
            where: {
                id: id
            }
        };

        const incident = await Incident.findOne(selector)
            .catch((error) => {
                return response.status(404).send(error);
            });

        if (incident == null) {
            return response.status(404).json({ message: 'Record not found' });
        }

        await Incident.destroy(selector)
            .then(() => {
                return response.status(200).json({ message: `Incident ${id} deleted` });
            }).catch((error) => {
                return response.status(400).send(error);
            });
    },

    async update(request, response) {
        const { id } = request.params;
        const data = {
            title: request.body.title,
            description: request.body.description,
            status: request.body.status
        };
        const selector = {
            where: {
                id: id
            }
        };

        await Incident.update(data, selector)
            .then(() => {
                return response.status(200).json({ message: `Incident ${id} updated` });
            }).catch((error) => {
                return response.status(400).send(error);
            });
    }
};