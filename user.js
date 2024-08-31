
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'Users',
      timestamps: false,
    });
  
    User.associate = (models) => {
      User.hasMany(models.Expense, { foreignKey: 'user_id' });
      User.hasMany(models.Category, { foreignKey: 'user_id' });
      User.hasMany(models.PaymentMethod, { foreignKey: 'user_id' });
      User.hasMany(models.Budget, { foreignKey: 'user_id' });
    };
  
    return User;
  };
  