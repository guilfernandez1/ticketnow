const db = require('./../database/models');
const { Incident, User } = require('./../database/models');

module.exports = {

    async index(request, response) {
        const incident = await Incident.findAll({
            include: [{
                model: User,
                as: 'user',
                attributes: ['name', 'email']
            }]
        });

        return response.json(incident);
    },

    async create(request, response) {
        const incident = await Incident.create(request.body);

        return response.status(201).json(incident);
    },

    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;
        const selector = {
            where: {
                id: id
            }
        };

        const incident = await Incident.findOne({ attributes: ['user_id'], selector })
            .catch((error) => {
                return response.status(404).send(error);
            });

        if (incident.user_id != user_id) {
            return response.status(401).json({ error: 'Operation not permitted' });
        }

        await Incident.destroy(selector)
            .then(() => {
                return response.status(200).send({ message: `Incident ${id} deleted` });
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
                return response.status(200).send();
            }).catch((error) => {
                return response.status(400).send(error);
            });
    }
};