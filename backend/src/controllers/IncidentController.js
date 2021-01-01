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

        const incident = await Incident.findOne({
            attributes: ['user_id'],
            where: {
                'id': id
            }
        });

        console.log(user_id)
        console.log(incident.user_id)

        if (incident.user_id != user_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await Incident.destroy({
            where: {
                'id': id,
            }
        });

        return response.status(204).send();
    },

    async update(request, response) {
        const { _id } = request.params;

        const incident = await Incident.update(
            {
                title: request.body.title,
                description: request.body.description,
                status: request.body.status
            }, {
            where: {
                id: request.params
            },
        });

        return response.status(200).send({ text: 'tudo certo' });
    }
};