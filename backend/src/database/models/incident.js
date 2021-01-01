module.exports = (sequelize, DataTypes) => {
    const Incident = sequelize.define('Incident', {
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
    });

    Incident.associate = function (models) {
        Incident.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    };

    return Incident;
}