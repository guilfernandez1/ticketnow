module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Incident, {
        foreignKey: 'id',
        as: 'incidents'
    });
};

  return User;
}